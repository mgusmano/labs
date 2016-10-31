Ext.define('Viewer.view.grid.RowExpanderGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'c-preview-expander-grid',
    store: Ext.create('Viewer.store.RowExpanderStore'),
    columns: [
        { text: "Company", flex: 1, dataIndex: 'name'},
        { text: "Price", formatter: 'usMoney', dataIndex: 'price'},
        { text: "Change", dataIndex: 'change'},
        { text: "% Change", dataIndex: 'pctChange'}
    ],
    width: 600,
    height: 400,
    plugins: [{
        ptype: 'rowexpander',
        rowBodyTpl : new Ext.XTemplate(
            '<p><b>Company:</b> {name}</p>',
            '<p><b>Change:</b> {change:this.formatChange}</p>',
            {
                formatChange: function(v){
                    var color = v >= 0 ? 'green' : 'red';
                    return '<span style="color: ' + color + ';">' + Ext.util.Format.usMoney(v) + '</span>';
                }
            })
    }]
});