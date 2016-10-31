/**
 * This example shows how to create a toggle button. Default button scales to "small".
 */
Ext.define('Viewer.view.buttons.ToggleButtons', {
    extend: 'Ext.Container',
    xtype: 'c-preview-toggle-buttons',

    requires: [
        'Ext.button.Button',
        'Ext.layout.container.HBox'
    ],

    defaults : {
        xtype : 'button',
        margin : '0 20 0 0',
        enableToggle : true
    },

    layout : {
        type : 'hbox'
    },

    items : [
        { text : 'Toggle' },
        { text : 'Toggle w/Icon', glyph : 'xf087@FontAwesome' }
    ]
});