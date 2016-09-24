//@tag page03view
Ext.define('AppCamp.view.page03.Page03View',{
	extend: 'Ext.panel.Panel',
	xtype: 'page03view',
	requires: [
			'AppCamp.view.page03.Page03ViewController',
			'AppCamp.view.page03.Page03ViewModel'
	],

	controller: 'page03-page03view',
	viewModel: {
			type: 'page03-page03view'
	},
	layout: 'vbox',
	items: [
		{ 
			xtype: 'button',
			bind: { text: '{name}' },
			width:100,
			handler: 'onClick'
		},
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
		}
	]
});
