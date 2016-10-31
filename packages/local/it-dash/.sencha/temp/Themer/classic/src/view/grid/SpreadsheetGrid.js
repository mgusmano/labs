Ext.define('Viewer.view.grid.SpreadsheetGrid', {
    extend : 'Ext.grid.Panel',
    requires: [
        'Ext.grid.selection.SpreadsheetModel'
    ],
    
    xtype: 'c-preview-spreadsheet-grid',
    store: Ext.create('Viewer.store.RowExpanderStore'),
    columns: [
        { text: "Company", flex: 1, dataIndex: 'name'},
        { text: "Price", formatter: 'usMoney', dataIndex: 'price'},
        { text: "Change", dataIndex: 'change'},
        { text: "% Change", dataIndex: 'pctChange'}
    ],
    width: 600,
    height: 400,
    selModel: {
        type: 'spreadsheet',
        extensible: true
    }
});