/**
 * Created by mbrocato on 6/1/16.
 */
Ext.define('Viewer.view.panel.Panel', {
    extend: 'Ext.Panel',
    xtype: 'c-preview-panel',

    requires: [
        'Viewer.DummyText'
    ],

    flex: 1,
    title: 'Panel',
    html: Viewer.DummyText.mediumText,
    margin: 10,
    border: true,
    iconCls: 'x-fa fa-globe',

    tools: [
        { type:'pin' },
        { type:'refresh' },
        { type:'search' },
        { type:'save' }
    ]
});