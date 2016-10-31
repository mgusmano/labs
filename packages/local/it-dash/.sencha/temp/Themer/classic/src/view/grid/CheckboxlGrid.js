Ext.define('Viewer.view.grid.CheckboxGrid', {
    extend: 'Ext.grid.Panel',

    xtype: 'c-preview-checkbox-grid',
    store: Ext.create('Viewer.store.RowExpanderStore'),
    columns: [
        { text: 'Company', flex: 1, dataIndex: 'name' },
        { text: 'Price', formatter: 'usMoney', dataIndex: 'price' },
        { text: 'Change', dataIndex: 'change' },
        { text: '% Change', dataIndex: 'pctChange' }
    ],
    width: 600,
    height: 400,
    selModel: { selType: 'checkboxmodel' }
})
