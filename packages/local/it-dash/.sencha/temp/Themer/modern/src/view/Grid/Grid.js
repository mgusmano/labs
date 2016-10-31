Ext.define('Viewer.view.grid.Grid', {
    extend: 'Ext.grid.Grid',
    xtype: 'c-preview-grid',
    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.grid.column.Number',
        'Ext.grid.plugin.*',
        'Viewer.model.RowExpanderModel'
    ],
    config: {
        layout: 'fit',
        grouped: true,
        store: {
            model: 'Viewer.model.RowExpanderModel',
            autoLoad: true,
            grouper: {
                groupFn: function(record) {
                    return record.get('name')[0];
                }
            },
            proxy: {
                type: 'ajax',
                url: 'data/row-expander-data.json',
                reader: {
                    rootProperty: 'results'
                }
            }
        },
        plugins: [{
            type: 'gridpagingtoolbar' 
        }, {
            type: 'gridsummaryrow' 
        }, {
            type: 'gridcolumnresizing'
        }, {
            type: 'rowexpander',
        }],
        columns: [{ 
            text: 'Name',  
            dataIndex: 'name', 
            flex: 3,
            summaryType: 'count',
            resizable: true,
            summaryRenderer: function (value) {
                return value + ' Companies';
            } 
        },{
            text: 'Price',
            dataIndex: 'price',
            flex: 1,
            minWidth: 80,
            summaryType: 'average',
            xtype: 'numbercolumn',
            resizable: true,
            format: '0.00'
        }, {
            xtype: 'checkcolumn',
            dataIndex: "checked",
            width: 50,
            headerCheckbox: true
        }],

        itemConfig: {
            body: {
                tpl: new Ext.XTemplate(
                    '<p><b>Change:</b> {change:this.formatChange}</p>',
                    {
                        formatChange: function(v){
                            return '<span>' + Ext.util.Format.usMoney(v) + '</span>';
                        }
                    }
                )
            }
        }
    }
});