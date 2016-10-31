Ext.define('Viewer.view.grid.BasicGrid', {
    extend : 'Ext.grid.Panel',
    xtype: 'c-preview-basic-grid',

    requires: [
        'Ext.grid.column.RowNumberer'
    ],

    store: Ext.create('Viewer.store.GridStore'),
    emptyText: 'No records found',
    columns: [
        { xtype : 'rownumberer' },
        { text: 'Name', dataIndex: 'name', flex: 2 },
        { text: 'Email', dataIndex: 'email', flex: 3 },
        { text: 'Phone', dataIndex: 'phone', width: 130 }
    ],
    width: 600,
    height: 400,
    bbar : [
        {
            text : 'Clear',
            handler : 'onClearGrid',
            glyph : 'xf00d@FontAwesome'
        },
        {
            text : 'Refresh',
            handler : 'onRefreshGrid',
            glyph : 'xf021@FontAwesome'
        }
    ]
});