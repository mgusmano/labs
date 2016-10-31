Ext.define('Viewer.view.tree.Tree', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.list.Tree',
        'Ext.list.TreeItem'
    ],

    xtype: 'c-preview-tree',
    layout: 'fit',

    viewModel: {
        type: 'tree'
    },

    items: [{
        xtype: 'treelist',
        reference: 'treelist',
        autoScroll: true,
        bind: '{navItems}'
    }]
});