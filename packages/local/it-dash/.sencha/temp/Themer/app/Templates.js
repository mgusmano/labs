/**
 * Holds all templates for rendering each visual permutation of Ext components
 */
Ext.define('Viewer.Templates', {
    singleton: true,

    /**
     * @property {Object}
     * A map of class name to template configs
     */
    templates: {},

    /**
     * Adds templates for a class
     * @param {String} className
     * @param {Object} templates
     */
    add: function(className, templates) {
        this.templates[className] = templates;
    },

    /**
     * Gets the templates for the specified class
     * @param {String} className
     * @returns {Ext.Promise} The templates config is passed to the resolve function
     */
    get: function(className) {
        console.log('loading templates for ' + className);

        return new Ext.Promise(function(resolve, reject) {
            var cached = this.templates[className];

            if (cached) {
                resolve(cached);
            } else {
                Ext.Loader.loadScript({
                    url: Viewer.config.templatesUrl + '/' + className + '.js',
                    scope: this,
                    onLoad: function() {
                        console.log('loaded templates for ' + className);
                        resolve(this.templates[className]);
                    },
                    onError: function() {
                        console.log('error loading templates for ' + className);
                        resolve(this.templates[className] = {});
                    }
                });
            }
        }.bind(this));
    }
});