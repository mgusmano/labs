/**
 * The main controller for the viewer iframe.
 */
Ext.define('Viewer.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: [
        'Ext.util.Event',
        'Viewer.view.Highlighter'
    ],

    privates: {
        /**
         * The currently selected element
         * @property {HTMLElement}
         */
        selectedEl: null,

        /**
         * @property {Boolean}
         * True if the inspect toggle button is checked
         */
        inspectEnabled: false,

        /**
         * Data from inspect.json, passed in as part of the toggleInspect message
         */
        inspectData : null,

        /**
         * Classes that actually have a 'default' UI defined
         */
        requireDefaultUIFor: {
            'classic:Ext.tab.Tab': true
        },

        /**
         * Private components that when inspected, should return variables for the parent component.
         */
        innerComponents: {
            'modern:Ext.field.Input': true
        }
    },

    init: function() {
        this.window = this;
        this.initElementSelectors();
        this.postVariables('ready');

        window.addEventListener('message', this.onMessage.bind(this), false);

        // Monkey-patch for SDKTOOLS-1583/1584, Fashion.version will be populated (6.2.1) when proper fix is applied
        // and this code block can safely be removed in future versions of Themer that force Cmd 6.2.1+ support.
        if (Fashion.version === undefined) {
            var onBuildSassFileWas = SassBuilder.onBuildSassFile,
                saveMixinsWas = SassBuilder.saveMixins;

            Fashion.apply(SassBuilder, {
                onBuildSassFile: function(update){
                    if (SassBuilder.invalidates) {
                        SassBuilder.saveFileUpdated = false;
                        SassBuilder.skipNextBuild = 0;
                    }

                    if (SassBuilder.skipNextBuild) {
                        Fashion.log("Skipping rebuild.");
                        SassBuilder.skipNextBuild = SassBuilder.skipNextBuild - 1;
                        Fashion.onAfterBuild(false);
                        return false;
                    }

                    if (SassBuilder.saveFileUpdated) {
                        Fashion.log("Applying save file updates.");
                        SassBuilder.saveFileUpdated = false;
                        Fashion.setVariables(Fashion.getSavedVariables(), null, false, true);
                        Fashion.onAfterBuild(false);
                        return false;
                    }

                    SassBuilder.saveFileUpdated = false;
                    onBuildSassFileWas.apply(SassBuilder, arguments);
                    return true;
                },

                saveMixins: function() {
                    SassBuilder.skipNextBuild = 0;
                    saveMixinsWas.apply(SassBuilder, arguments);
                }
            });

            Fashion.apply(Fashion.SassFile.prototype, {
                getCustomUIs: function() {
                    var me = this,
                        mixinMap = {},
                        allUIs = {},
                        calls = me.mixinCalls,
                        separator = ', ',
                        node, mixinName, include, args, arg, argName, argMap, uiMap;
                    allUIs[me.jsClassName] = mixinMap;
                    for (var i = 0; i < calls.length; i++) {
                        node = calls[i];
                        include = node.include;
                        mixinName = include.id || include.value;
                        uiMap = mixinMap[mixinName] || {};
                        args = include.args;
                        if (args.isFashionListAst) {
                            args = args.items;
                            separator = args.separator;
                        }
                        if (!Array.isArray(args)) {
                            args = [args];
                        }
                        argMap = {};
                        for (var a = 0; a < args.length; a++) {
                            arg = args[a];
                            argName = a;
                            var value = arg.name || arg.value;
                            if (arg.variable) {
                                argName = arg.variable;
                            }
                            if (!value) {
                                while(arg && arg.expr) {
                                    arg = arg.expr;
                                }
                                if (arg.isFashionListAst) {
                                    separator = arg.separator || separator;
                                    value = Fashion.convert(arg.items, function(item){
                                        return item.name || item.value;
                                    });
                                    value = '(' + value.join(separator) + ')';
                                }
                                else {
                                    value = arg.name || arg.value;
                                }
                            }
                            argMap[argName] = value;
                        }
                        if (argMap.$ui) {
                            var tmp = {};
                            tmp[argMap.$ui] = argMap;
                            delete argMap.$ui;
                            argMap = tmp;
                        }
                        Fashion.apply(uiMap, argMap);
                        mixinMap[mixinName] = uiMap;
                    }
                    return allUIs;
                }
            });
        }

        // Post variables to Editor app after Fashion build, needed for UIs
        Fashion.onAfterBuild = this.postVariables.bind(this);
    },

    /**
     * Called when a message is received from the Editor app
     * @param e
     */
    onMessage: function(e) {
        var data = e.data;

        switch (data.action) {
            case 'toggleInspect':
                this.toggleInspectEnabled(data.value, data.inspectData);
                break;
            case 'toggleFrozen':
                this.toggleFrozen(data.frozen);
                break;
            case 'show':
                this.show(data.previewId, data.uiName, data.componentQuery);
                break;
            case 'setVariables':
                this.setVariables(data.variables);
                break;
            case 'componentClasses':
                this.getClassNames();
                break;
            case 'bigMode':
                this.updateBigMode(data.bigMode);
                break;
        }
    },

    /**
     * Saves updated variables using fashion
     * @param {Object} variables A map of variable name to value
     * @param {Object} [revertOnError=true] Set to false to prevent automatically reverting to the previous values if a sass complilation error occurs
     */
    setVariables: function(variables, revertOnError) {
        var me = this;

        if (revertOnError === undefined) {
            revertOnError = true;
        }

        var themeVariables = {}
        Object.keys(variables).filter(function(variable) { return variable.indexOf('uisPP') < 0; }).forEach(function(variable) {
            // TODO: CAT-420 Should send hyphens instead of underscores to Fashion.
            themeVariables[variable.replace(/_/g, '-')] = variables[variable];
        });
        var uiVariables = me.unflattenUis(variables);

        var savedVariables = {};
        Object.keys(me.saved).filter(function(v) {
            return !v.match(/uisPP/);
        }).forEach(function(v) {
            savedVariables[v.replace(/_/g, '-')] = me.saved[v];
        });

        try {
            // Only call setVariables OR saveMixins
            // calling them consecutively seems to confuse Fashion
            // and the theme does not re-compile correctly.
            if(!Ext.Object.equals(savedVariables, themeVariables)) {
                console.log('Setting variables', themeVariables);
                Fashion.setVariables(themeVariables, function() {
                    me.getView().updateLayout();
                    me.postVariables();
                });
            } else {
                console.log('Saving mixins', uiVariables);

                Fashion.saveMixins(uiVariables);
                // Fashion.onAfterBuild will handle posting variables back to Editor.
            }
        } catch (err) {
            if (me.saved && revertOnError) {
                me.setVariables(me.saved);
            }
            me.postError(err);
        }
    },

    /**
     * Creates the element selectors for inspect mode
     */
    initElementSelectors: function() {
        var me = this;

        this.selectHighlighter = Ext.create({
            xtype: 'c-highlighter',
            type: 'select'
        });

        this.hoverHighlighter = Ext.create({
            xtype: 'c-highlighter',
            type: 'hover'
        });

        document.body.addEventListener('mouseover', function(event) {
            if (!me.inspectEnabled) return;
            var target = event.target;

            if (!me.matchesDomSelector(target)) {
                var cmp = Ext.Component.fromElement(target);
                target = cmp && cmp.el.dom;
            }

            me.hoverEl = target;

            if (target && !Ext.fly(target).hasCls('c-no-inspect')) {
                me.hoverHighlighter.highlight(target);
            } else {
                me.hoverHighlighter.hide();
                target = null;
            }
        });

        document.body.addEventListener('click', function(event) {
            if (me.inspectEnabled && me.hoverEl && !Ext.fly(me.hoverEl).hasCls('c-no-inspect')) {
                me.selectHighlighter.highlight(me.hoverEl);
                me.postSelectedElement(me.hoverEl);
                event.stopPropagation();
            }
        }, true);
    },

    matchesDomSelector: function(el) {
        for (var selector in this.inspectData.domSelectors) {
            if (el.matches(selector)) {
                return true;
            }
        }
    },

    /**
     * Returns variables for the selected element
     * @param {DOMElement} el selected element
     * @returns {Object} Keys are sass variables for the selected component
     */
    getVariablesOnInspect: function (el) {
        var cmp = Ext.Component.fromElement(el),
            result = {},
            className = cmp.$className;

        // move up to the parent component if this is a private inner component, as in the case of Ext.field.Input
        if (this.innerComponents[Ext.toolkit + ':' + className]) {
            cmp = Ext.Component.fromElement(cmp.el.parent());
            className = cmp.$className;
        }

        if (className.indexOf('Ext.') === -1) {
            className = this.getProtoClassName(cmp);
        }

        this.addVariablesForDOMSelectors(el, result);

        if (cmp && cmp.el) {
            var requireUI = (cmp.activeUI && cmp.activeUI !== 'default') || this.requireDefaultUIFor[Ext.toolkit + ':' + className];

            var ui = requireUI && this.inspectData.uis[cmp.activeUI], // TODO need a better way to determine if a ui is actually being used
                variablesForCmp = this.inspectData.components[className];

            this.applySelectors(cmp, variablesForCmp);

            // add variables from doxi
            for (var v in variablesForCmp) {
                v = v.replace(/-/g, '_');

                // if the component has a ui, make sure that the variable is listed under than ui in inspect.json
                if (!ui || ui.hasOwnProperty(v)) result[v] = className;
            }
        }

        return result;
    },

    /**
     * Adds variables for matching domSelectors from inspect.json
     * @param {DOMElement} el
     * @param {Object} variables
     */
    addVariablesForDOMSelectors: function(el, variables) {
        for (var selector in this.inspectData.domSelectors) {
            if (el.matches(selector)) {
                var show = this.inspectData.domSelectors[selector];

                for (var v in show) {
                    var key = v.replace(/-/g, '_');

                    if (show[v]) {
                        variables[key] = true;
                    } else {
                        delete variables[key];
                    }
                }
            }
        }
    },

    /**
     * For any matching selectors in inspect.json, this function adds the variables listed under show and removes the variables listed under hide
     * @param {Ext.Component} cmp
     * @param {Object} variables The list of variables for the component based on class
     */
    applySelectors: function(cmp, variables) {
        for (var selector in this.inspectData.selectors) {
            var show = this.inspectData.selectors[selector];

            try {
                if (Ext.ComponentQuery.is(cmp, selector)) {
                    for (var v in show) {
                        if (show[v]) {
                            variables[v] = true;
                        } else {
                            delete variables[v];
                        }
                    }
                }
            } catch (e) {
                console.warn('error in selector: ' + selector, e)
            }
        }
    },

    /**
     * Toggles the frozen state of the app.  When frozen, all events are suspended.  This allows the
     * user to style app in a specific state, such as hovering over a button, or with a popup menu open.
     * @param {Boolean} freeze
     */
    toggleFrozen: function(freeze) {
        Ext.util.Event.prototype.suspended = freeze || this.inspectEnabled;
    },

    /**
     * Turns inspection on or off
     * @param {Boolean} enabled
     * @param {Object} inspectData The contents of inspect.json
     */
    toggleInspectEnabled: function(enabled, inspectData) {
        this.inspectEnabled = enabled;
        this.inspectData = inspectData;
        this.toggleFrozen(enabled);

        if (!enabled) {
            this.selectHighlighter.hide();
            this.hoverHighlighter.hide();
            this.postSelectedElement(null);
            this.batchLayouts(function() {
                // reload the preview - freezing events can put the preview in a weird visual state, such as frozen menu selections that don't reset unless clicked.
                if (this.previewId) this.show(this.previewId);

                try {
                    this.getView().plugins[0].updateResponsiveState(); // make viewport redraw
                } catch (e) {
                    // just move on if there is an error here
                }
            }, this);
        }
    },

    /**
     * Stub batchLayouts in modern
     */
    batchLayouts: Ext.batchLayouts || function(cb, scope) { cb.call(scope) },

    /**
     * Displays a component with the given sass variables applied
     * @param {String} previewId The id of the preview to show
     */
    show: function(previewId, uiName, componentQuery) {
        this.previewId = previewId;

        var view = this.lookupReference('mainContainer'),
            xtype = 'c-preview-' + previewId;

        var waitMask = Ext.getCmp('waitMask');
        if (waitMask)  waitMask.destroy();

        try {
            view.removeAll();
        } catch (e) {
            console.log('error removing existing preview', e);
        }

        if (Ext.ClassManager.getByAlias('widget.' + xtype)) {
            var cmp = view.add({
                xtype: xtype,
                cls: 'c-preview-root'
            });

            if(uiName) {
                var setUiOnCmp = function(c) {
                    if(c.setUi) {   // Because modern and classic are different...slightly...
                        c.setUi(uiName);
                    } else {
                        c.setUI(uiName);
                    }
                };

                if(componentQuery) {
                    cmp.query(componentQuery).forEach(setUiOnCmp.bind(null));
                } else {
                    setUiOnCmp(cmp);
                }
            }
        }
    },

    /**
     * Gets feature class names for Ext.panel.Table instances
     * @param {Node} childNode - child node
     * @returns {Array} - Feature class names
     */
    getFeatureClassNames : function (childNode) {
        var featureClassNames = [];
        var viewNode = childNode.getView();

        var features = viewNode.features;
        for (var i=0; i < features.length; i++) {
            var feature = features[i];
            if (feature) {
                var className = feature.__proto__['$className'];
                if (!Ext.Array.contains(featureClassNames, className)) {
                    featureClassNames.push(className);
                }
            }
        }
        return featureClassNames;
    },

    /**
     * Gets class names for all components within a given component
     */
    getClassNames : function () {
        var view = this.lookupReference('mainContainer');
        var children = view.query('component');
        var requiredClassNames = [];
        for (var i=0; i < children.length; i++) {
            var child = children[i];
            if (Ext.ClassManager.get('Ext.panel.Table') && child instanceof Ext.panel.Table) {
                var featureClassNames = this.getFeatureClassNames(child);
                requiredClassNames = Ext.Array.merge(requiredClassNames, featureClassNames);
            }
            var className = this.getProtoClassName(child);
            if (className && !Ext.Array.contains(requiredClassNames, className)) {
                requiredClassNames.push(className);
            }
        }

        parent.postMessage({
            action : 'componentClasses',
            classNames : requiredClassNames
        }, '*');
    },

    /**
     * Looks for Ext component class in the inheritance chain
     * @param {Node} childNode
     * @returns {String} Class Name
     */
    getProtoClassName : function (childNode) {
        if (childNode) {
            var proto = childNode.__proto__;
            if (proto && proto['$className']) {
                var className = proto['$className'];

                if (className && className.indexOf('Ext.') !== -1) {
                    return className;
                } else {
                    return this.getProtoClassName(proto);
                }

            }
        }
    },

    /**
     * Sends the css classes for the specified element and its ancestors to the editor app
     * @param {Node/HTMLElement} el
     */
    postSelectedElement: function(el) {
        parent.postMessage({
            action: 'elementSelected',
            variables: el && this.getVariablesOnInspect(el)
        }, '*');
    },

    /**
     * Sends all variables to the Editor app
     * @param {String} [action='updateSassVariables']
     */
    postVariables: function(action) {
        action = action || 'updateSassVariables';

        // Re-highlight inspected component in case location/size changed.
        if(!this.selectHighlighter.isHidden()) {
            this.selectHighlighter.reHighlight();
        }

        var saved = Ext.Object.merge(Fashion.getSavedVariables() || {}, this.flattenUis());
        this.saved = {};
        Object.keys(saved).forEach(function(variable) {
            // TODO: CAT-420 Should send hyphens instead of underscores to Fashion.
            this.saved[variable.replace(/-/g, '_')] = saved[variable];
        }.bind(this));

        // fix bug where cmd returns extra spaces in saved variables
        for (var name in this.saved) this.saved[name] = this.saved[name] ? this.saved[name].trim() : this.saved[name];

        var variables = Ext.Object.merge(Fashion.getVariables(), this.flattenUis());
        var themeVariables = {};
        Object.keys(variables).forEach(function(variable) {
            // TODO: CAT-420 Should send hyphens instead of underscores to Fashion.
            themeVariables[variable.replace(/-/g, '_')] = variables[variable];
        });

        console.log('Posting saved variables', this.saved);
        console.log('Posting variables', themeVariables);
        parent.postMessage({
            action: action,
            variables: themeVariables,
            sources: Fashion.getVariableSources(), // these are the actual sass expressions
            saved: this.saved
        }, '*');
    },

    /**
     * Sends an error to the Editor app
     * @param {Integer} id An id to keep track of the ui event
     */
    postError: function(error) {
        parent.postMessage({ action: 'sassCompilationError', message: typeof error === 'string' ? error : error.message }, '*')
    },

    onClearGrid : function (btn) {
        var grid = btn.up('grid');
        var store = grid.getStore();
        store.removeAll();
    },

    onRefreshGrid : function (btn) {
        var grid = btn.up('grid');
        grid.getStore().reload();
    },

    /**
     * Adds/removes x-big from the html body element
     * @param bigMode
     */
    updateBigMode: function(bigMode) {
        var htmlEl = Ext.fly(document.querySelector('html'));

        if(bigMode) {
            htmlEl.addCls('x-big');
        } else {
            htmlEl.removeCls('x-big');
        }
    },

    /**
     * Flattens UIs delimiting object levels with 'PP' and replacing other special
     * characters with _.  This is due to character limitations in view models
     * and will cause bind expressions to tokenize or attempt to evaluate the expression
     * instead of just bind to the data.
     * @param flatUis
     * @returns {{}
     */
    flattenUis: function(uis) {
        uis = uis || Fashion.getMixins();

        var tokens = ['$uis'];
            result = {};

        Object.keys(uis).forEach(function(cmpClass) {
            tokens.push(cmpClass.replace(/\./g, '_'));
            result[tokens.join('PP')] = '';
            Object.keys(uis[cmpClass]).forEach(function(mixinName) {
                tokens.push(mixinName.replace(/-/g, '_'));
                result[tokens.join('PP')] = '';
                Object.keys(uis[cmpClass][mixinName]).forEach(function(uiName) {
                    tokens.push(uiName.replace(/-/g, '_'));
                    result[tokens.join('PP')] = '';
                    Object.keys(uis[cmpClass][mixinName][uiName]).forEach(function(varName) {
                        tokens.push(varName.replace(/\$/, '').replace(/-/g, '_'));
                        // Puts ${uis_[cmpClass]_[mixinName]_[uiName]_[varName]} as key in flattened result.
                        var value = uis[cmpClass][mixinName][uiName][varName];
                        // Strip out () from value if they exist
                        result[tokens.join('PP')] = value && value.match(/^\(.*\)$/) ? value.replace(/^\((.*)\)$/, '$1') : value;
                        tokens.pop();
                    });
                    tokens.pop();
                });
                tokens.pop();
            });
            tokens.pop();
        });

        return result;
    },

    /**
     * Unflattens UIs back to the object structure Fashion expects.
     */
    unflattenUis: function(flatUis) {
        var result = {};

        Object.keys(flatUis).filter(function(key) { return key.indexOf('$uisPP') === 0; }).forEach(function(key) {
            var tokens = key.split(/PP/);
            var cmpClass = tokens[1] && tokens[1].replace(/_/g, '.');
            var mixinName = tokens[2] && tokens[2].replace(/_/g, '-');
            var uiName = tokens[3] && tokens[3].replace(/_/g, '-');
            var varName = tokens[4] && '$' + tokens[4].replace(/_/g, '-');

            result[cmpClass] = result[cmpClass] || {};
            if(mixinName) {
                result[cmpClass][mixinName] = result[cmpClass][mixinName] || {};
            }
            if(uiName) {
                result[cmpClass][mixinName][uiName] = result[cmpClass][mixinName][uiName] || {};
            }
            if(varName) {
                if(varName.match(/font-family/) && flatUis[key] && flatUis[key].indexOf(',') >= 0) {
                    // Escape values that contain , by surrounding value with ()
                    result[cmpClass][mixinName][uiName][varName] = '('+flatUis[key]+')';
                } else {
                    result[cmpClass][mixinName][uiName][varName] = flatUis[key];
                }
            }
        });

        return result;
    }
});
