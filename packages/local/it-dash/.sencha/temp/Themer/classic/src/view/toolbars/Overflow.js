/**
 * This example shows how to create a bread crumb toolbar.
 */
Ext.define('Viewer.view.toolbars.Overflow', {
    extend: 'Ext.Container',
    xtype: 'c-preview-overflow-toolbar',
    requires: [
        'Ext.panel.Panel',
        'Viewer.DummyText',
        'Ext.toolbar.Breadcrumb'
    ],

    defaults: {
        xtype: 'panel',
        width: 555,
        height: 305,
        bodyPadding: 10,
        collapsible: true,
        margin: '0 0 10 0',
        title: 'Overflow',
        glyph: 'xf085@FontAwesome'
    },
    initComponent : function () {
        var buttons = [{
            xtype: 'splitbutton',
            text: 'Menu',
            glyph: 'xf0ca@FontAwesome',
            menu:[{
                text:'Menu Button 1'
            }]
        }, '-', {
            xtype: 'splitbutton',
            text: 'Cut',
            glyph: 'xf0c4@FontAwesome',
            menu: [{
                text:'Cut Menu Item'
            }]
        }, {
            glyph: 'xf0c5@FontAwesome',
            text:'Copy'
        }, {
            text: 'Paste',
            glyph: 'xf0ea@FontAwesome',
            menu:[{
                text:'Paste Menu Item'
            }]
        }, {
            glyph: 'xf016@FontAwesome',
            text: 'Format'
        }, {
            glyph: 'xf032@FontAwesome',
            text: 'Bold',
            enableToggle: true
        }, {
            glyph: 'xf0cd@FontAwesome',
            text: 'Underline',
            menu: [{
                text: 'Solid'
            }, {
                text: 'Dotted'
            }, {
                text: 'Dashed'
            }]
        }, {
            glyph: 'xf033@FontAwesome',
            text: 'Italic'
        }];

        this.items = [
            {
                dockedItems : [
                    {
                        xtype: 'toolbar',
                        dock: 'top',
                        overflowHandler: 'menu',
                        items: buttons
                    }, {
                        xtype: 'toolbar',
                        dock: 'bottom',
                        overflowHandler: 'scroller',
                        items: buttons
                    }, {
                        xtype: 'toolbar',
                        dock: 'right',
                        overflowHandler: 'scroller',
                        items: buttons
                    }
                ]
            }
        ]

        this.callParent();
    }
});