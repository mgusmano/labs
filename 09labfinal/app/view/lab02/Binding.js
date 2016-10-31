Ext.define('AppCamp.view.lab02.Binding',{
	extend: 'AppCamp.view.base.BaseContainer',
	xtype: 'app-binding',
	controller: 'app-binding',
	viewModel: 'app-binding',
	layout: 'vbox',

	items: [
		{
			xtype: 'dataview',
			flex: 1,
			margin: 10,
			shadow: true,
			scrollable: 'vertical',
			inline: true,
			selectedCls: 'dataview-selected',
			itemTpl: [
				'<div class="dataview">',
					'<img class="dataview-image" src="resources/app/logos/{agencyCode}.svg" />',
					'<div class="dataview-text">',
						'<div>{agencyAbbreviation}&nbsp;({agencyCode})</div>',
						'<div>{agencyName}</div>',
						'<div>{[Ext.util.Format.currency(values.totalITspendingCYB,"$",2)]}</div>',
					'</div>',
				'</div>'
			],
			bind: {
				store: '{agencies}',
				selection: '{agency}'
			}
		},
		{
			xtype: 'list',
			flex: 1,
			margin: 10,
			shadow: true,
			bind: {
				store: '{agencies}',
				selection: '{agency}'
			},
			itemTpl: '{agencyCode} - {agencyName} ({agencyAbbreviation}) {[Ext.util.Format.currency(values.totalITspendingCYB,"$",2)]}'
		},
		{
			xtype: 'grid',
			flex: 1,
			margin: 10,
			shadow: true,
			columns: [
				{ dataIndex: 'agencyCode', text: 'agencyCode', width: 300 },
				{ dataIndex: 'agencyName', text: 'agencyName', type: 'string', flex: 1 },
				{ dataIndex: 'agencyAbbreviation', text: 'agencyAbbreviation', width: 300 },
				{ dataIndex: 'totalITspendingCYB',text: 'totalITspendingCYB', width: 200, 
					align: 'right', renderer: function(v) {
						return Ext.util.Format.currency(v,'$',2)
					}
				}
			],
			bind: {
				store: '{agencies}',
				selection: '{agency}'
			}
		}
	]
});
