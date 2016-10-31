Ext.define('Viewer.view.tree.TreeList', {
    extend: 'Ext.list.Tree',
    xtype: 'c-preview-tree-list',

    requires: [
        'Ext.list.Tree',
        'Viewer.view.tree.TreeListModel'
    ],

    width: 300,
    height: 450,

    viewModel: {
        type: 'tree-list'
    },

    reference: 'treelist',
    bind: '{treeNavItems}'
});