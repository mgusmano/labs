/**
 * This example shows how to create a basic toolbar.
 */
Ext.define('Viewer.view.toolbars.BasicToolbar', {
    extend: 'Ext.Container',
    xtype: 'c-preview-basic-toolbar',
    requires: [
        'Ext.button.Split',
        'Ext.panel.Panel',
        'Ext.toolbar.TextItem'
    ],

    items: [{
        xtype: 'panel',
        width: 600,
        height: 250,
        bodyPadding: 10,
        margin: '0 0 10 0',
        title: 'Horizontal Toolbar',
        glyph: 'xf085@FontAwesome',
        border: true,
        tbar : [
            {
                xtype:'splitbutton',
                text:'Menu Button',
                iconCls: null,
                glyph: 'xf0ca@FontAwesome',
                menu:[{
                    text:'Menu Button 1'
                }]
            }, '-', {
                xtype:'splitbutton',
                text:'Cut',
                iconCls: null,
                glyph: 'xf0c4@FontAwesome',
                menu: [{
                    text:'Cut Menu Item'
                }]
            }, {
                iconCls: null,
                glyph: 'xf0c5@FontAwesome',
                text:'Copy',
                disabled: true
            }, {
                text:'Paste',
                iconCls: null,
                glyph: 'xf0ea@FontAwesome',
                menu:[{
                    text:'Paste Menu Item'
                }]
            }, {
                glyph: 'xf032@FontAwesome',
                text: 'Bold',
                enableToggle: true
            }, {
                xtype: 'tbtext',
                text: 'Text'
            }
        ]
    },
    {
        xtype: 'panel',
        width: 600,
        height: 250,
        bodyPadding: 10,
        margin: '0 0 10 0',
        title: 'Vertical Toolbar',
        glyph: 'xf085@FontAwesome',
        border: true,
        lbar : [
            {
                xtype:'splitbutton',
                text:'Menu Button',
                iconCls: null,
                glyph: 'xf0ca@FontAwesome',
                menu:[{
                    text:'Menu Button 1'
                }]
            }, '-', {
                xtype:'splitbutton',
                text:'Cut',
                iconCls: null,
                glyph: 'xf0c4@FontAwesome',
                menu: [{
                    text:'Cut Menu Item'
                }]
            }, {
                iconCls: null,
                glyph: 'xf0c5@FontAwesome',
                text:'Copy',
                disabled: true
            }, {
                text:'Paste',
                iconCls: null,
                glyph: 'xf0ea@FontAwesome',
                menu:[{
                    text:'Paste Menu Item'
                }]
            }, {
                glyph: 'xf032@FontAwesome',
                text: 'Bold',
                enableToggle: true
            }, {
                xtype: 'tbtext',
                text: 'Text'
            }
        ]
    }]
});