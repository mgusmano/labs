Ext.define('Viewer.view.tree.BasicTree', {
    extend : 'Ext.tree.Panel',
    xtype: 'c-preview-basic-tree',
    store: Ext.create('Viewer.store.TreeStore'),
    width : 300,
    height : 300,
    animate : true
});