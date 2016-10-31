Ext.define('Viewer.view.main.Main', {
    extend: 'Ext.Container',

    requires: [
        'Viewer.view.*'
    ],

    cls: 'c-no-inspect',
    layout: 'fit',

    items: {
        reference: 'mainContainer',
        xtype: 'container',
        cls: 'c-no-inspect',
        layout: 'fit'
    },

    controller: 'main'
});
