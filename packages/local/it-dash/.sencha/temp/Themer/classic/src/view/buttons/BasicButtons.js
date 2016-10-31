/**
 * This example shows how to create a basic button. Default button scales to "small".
 */
Ext.define('Viewer.view.buttons.BasicButtons', {
    extend: 'Ext.Container',
    xtype: 'c-preview-basic-buttons',

    requires: [
        'Ext.button.Button',
        'Ext.layout.container.VBox'
    ],
    defaults : {
        xtype: 'button',
        margin : '0 0 20 0'
    },

    layout : {
        type : 'vbox',
        align: 'center'
    },

    items : [
        {
            text : 'Small'
        },
        {
            text : 'Small',
            glyph : 'xf087@FontAwesome'
        },
        {
            text : 'Medium',
            scale : 'medium'
        },
        {
            text : 'Medium',
            glyph : 'xf087@FontAwesome',
            scale : 'medium'
        },
        {
            text : 'Large',
            scale : 'large'
        },
        {
            text : 'Large',
            glyph : 'xf087@FontAwesome',
            scale : 'large'
        }

    ]
});