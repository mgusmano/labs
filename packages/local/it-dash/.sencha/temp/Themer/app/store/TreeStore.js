Ext.define('Viewer.store.TreeStore', {
    extend : 'Ext.data.TreeStore',
    storeId: 'treestore',
    root : {
        text : 'Simpsons',
        expanded : true,
        children : [
            { text : 'Lisa', leaf : true, checked : true },
            { text : 'Bart', leaf : true, checked : false },
            { text : 'Homer', leaf : true, checked : false },
            { text : 'Marge', leaf : true, checked : false }
        ]
    }
});