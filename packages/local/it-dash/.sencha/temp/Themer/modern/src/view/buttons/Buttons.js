Ext.define('Viewer.view.buttons.Buttons', {
    extend: 'Ext.Panel',
    xtype: 'c-preview-button',

    requires: [
        'Ext.Button'
    ],

    layout: {
        type : 'vbox',
        align: 'center'
    },

    bodyPadding: 20,

    defaults: {
        xtype: 'button',
        margin : '0 0 20 0'
    },

    items : [
        {
            text: 'Button'
        },
        {
            text: 'With an Icon',
            iconCls: 'x-fa fa-home'
        },
        {
            text: 'With a Badge',
            badgeText: '42'
        },
        {
            text: 'Disabled',
            iconCls: 'x-fa fa-cog',
            disabled: true
        }
    ]
});