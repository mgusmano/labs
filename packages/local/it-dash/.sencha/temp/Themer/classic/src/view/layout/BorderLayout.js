Ext.define('Viewer.view.layout.BorderLayout', {
    extend : 'Ext.panel.Panel',
    xtype : 'c-preview-border-layout',

    requires: [
        'Ext.layout.container.Border'
    ],

    width : 550,
    height : 500,
    defaults : {
        bodyStyle : 'padding:15px',
        collapsible: true,
        split: true,
        bodyPadding: 10
    },
    layout: {
        // layout-specific configs go here
        type: 'border'
    },
    items: [
        {
            title: 'Header',
            region: 'north',
            height: 100,
            html: '<p>Header content</p>'
        },
        {
            title: 'Toolbar',
            region: 'east',
            width: 150,
            html: '<p>Toolbar content</p>'
        },
        {
            title: 'Footer',
            region: 'south',
            height: 100,
            html: '<p>Footer content</p>'
        },
        {
            title: 'Navigation',
            region:'west',
            floatable: false,
            width: 150,
            html: '<p>Secondary content like navigation links could go here</p>'
        },
        {
            title: 'Main Content',
            collapsible: false,
            region: 'center',
            html: '<h2>Main Page</h2><p>This is where the main content would go</p>'
        }
    ]
});