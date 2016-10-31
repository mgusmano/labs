Ext.define('Viewer.view.grid.RowEditorGrid', {
    extend : 'Ext.grid.Panel',
    xtype: 'c-preview-editor-grid',
    store: Ext.create('Viewer.store.GridStore'),
    columns: [
        {header: 'Name', dataIndex: 'name', editor: 'textfield'},
        {header: 'Email', dataIndex: 'email', flex:1,
            editor: {
                xtype: 'textfield',
                allowBlank: false
            }
        },
        {header: 'Phone', dataIndex: 'phone', width: 150}
    ],
    selModel: 'rowmodel',
    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 1
    },
    width: 600,
    height: 400
});