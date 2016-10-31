/**
 * This example shows how to create basic panels. Panels typically have a header and a body,
 * although the header is optional. The panel header can contain a title, and icon, and
 * one or more tools for performing specific actions when clicked.
 */
Ext.define('Viewer.view.panels.BasicPanels', {
    extend: 'Ext.Container',
    xtype: 'c-preview-basic-panels',

    requires: [
        'Ext.panel.Panel',
        'Viewer.DummyText'
    ],

    defaults: {
        xtype: 'panel',
        width: 450,
        height: 200,
        bodyPadding: 10,
        collapsible: true,
        html: Viewer.DummyText.mediumText,
        margin: '0 0 10 0',
        tools: [
            { type:'pin' },
            { type:'refresh' },
            { type:'search' },
            { type:'save' }
        ]
    },

    items: [{
        title: 'Bordered Panel',
        glyph: 'xf140@FontAwesome',
        border: true
    }]
});