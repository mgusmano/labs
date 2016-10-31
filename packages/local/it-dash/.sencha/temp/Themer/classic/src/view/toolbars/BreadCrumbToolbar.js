/**
 * This example shows how to create a bread crumb toolbar.
 */
Ext.define('Viewer.view.toolbars.BreadCrumbToolbar', {
    extend: 'Ext.Container',
    xtype: 'c-preview-bread-crumb-toolbar',
    requires: [
        'Ext.panel.Panel',
        'Viewer.DummyText',
        'Ext.toolbar.Breadcrumb'
    ],

    defaults: {
        xtype: 'panel',
        width: 500,
        height: 250,
        bodyPadding: 10,
        margin: '0 0 10 0'
    },

    initComponent : function () {
        var store = new Viewer.store.BreadCrumbStore;

        this.items = [
            {
                title: 'Breadcrumb',
                glyph: 'xf085@FontAwesome',
                xtype: 'panel',
                tbar : [
                    {
                        xtype : 'breadcrumb',
                        store : store,
                        showIcons : true,
                        useSplitButtons: false,
                        selection : store.getRoot().childNodes[4].childNodes[7]
                    }
                ]
            },
            {
                title: 'Breadcrumb w/Split Buttons',
                glyph: 'xf085@FontAwesome',
                xtype: 'panel',
                tbar : [
                    {
                        xtype : 'breadcrumb',
                        store : store,
                        showIcons : true,
                        useSplitButtons: true,
                        selection : store.getRoot().childNodes[4].childNodes[7]
                    }
                ]
            }
        ];

        this.callParent();
    }
});