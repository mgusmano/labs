Ext.define('Viewer.model.RowExpanderModel', {
    extend : 'Ext.data.Model',
    fields: [
        {name: 'name'},
        {name: 'price', type: 'float'},
        {name: 'change', type: 'float'},
        {name: 'checked', calculate: function(data) { return data.id % 2 == 0 }}
    ]
});