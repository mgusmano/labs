Ext.define('Viewer.view.tree.TreeWithArrows', {
    extend : 'Ext.tree.Panel',
    xtype: 'c-preview-tree-with-arrows',
    store: Ext.create('Ext.data.TreeStore', {
        root : {
            text : 'Simpsons',
            expanded : true,
            children : [
                { text : 'Lisa', leaf : true },
                { text : 'Bart', leaf : true },
                { text : 'Homer', leaf : true },
                { text : 'Marge', leaf : true }
            ]
        }
    }),
    width : 300,
    height : 300,
    useArrows: true,
    animate : true
});