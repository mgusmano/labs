/**
 * This example shows how to create a menu button. Default button scales to "small".
 */
Ext.define('Viewer.view.buttons.MenuButtons', {
    extend: 'Ext.Container',
    xtype: 'c-preview-menu-buttons',

    requires: [
        'Ext.button.Button',
        'Ext.layout.container.HBox'
    ],

    defaults : {
        xtype : 'button',
        margin : '0 10 0 0',
        menu: [{
            glyph : 'xf0ed@FontAwesome',
            text:'Download'
        },{
            glyph : 'xf0ee@FontAwesome',
            text:'Upload'
        },{
            glyph : 'xf0c2@FontAwesome',
            text:'Now make it rain, will ya?'
        }]
    },

    layout : {
        type : 'hbox'
    },

    items : [{
        text : 'Menu Right'
    }, {
        text : 'Menu Bottom',
        arrowAlign: 'bottom'
    }]
});