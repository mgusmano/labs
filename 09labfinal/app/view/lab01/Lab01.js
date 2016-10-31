Ext.define('AppCamp.view.lab01.Lab01',{
	extend: 'BaseContainer',
	xtype: 'app-lab01',
	layout: 'fit',
	items: [
		{
			xtype: 'grid',
			margin: 10, shadow: true,
			columns: [
				{ dataIndex: 'agencyCode', text: 'agencyCode', width: 200 },
				{ dataIndex: 'agencyName', text: 'agencyName', type: 'string', flex: 1 },
				{ dataIndex: 'agencyAbbreviation', text: 'agencyAbbreviation', width: 200 },
				{ dataIndex: 'totalITspendingCYB',text: 'totalITspendingCYB', width: 200, 
					align: 'right', renderer: function(v) {
						return Ext.util.Format.currency(v,'$',2)
					}
				}
			],
			store: {
				autoLoad: true,
				proxy: {
					type: 'ajax',
					reader: {
						type: 'json',
						rootProperty: 'result'
					},
					url: 'resources/app/data/agenciesAllData.json'
				}
			}
		}
	]
});
