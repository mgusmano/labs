Ext.define('Viewer.view.main.Main', {
    extend: 'Ext.container.Container',

    requires: [
        'Ext.container.Container',
        'Ext.layout.container.Fit',
        'Ext.layout.container.VBox',
        'Viewer.view.*'
    ],

    layout: {
        type: 'fit'
    },

    cls: 'c-no-inspect',

    items: {
        reference: 'mainContainer',
        xtype: 'container',
        scrollable: true,
        padding: '50 10 10 10',
        cls: 'c-no-inspect',
        layout: {
            type: 'vbox',
            align: 'center'
        }
    },

    controller: 'main'
});
