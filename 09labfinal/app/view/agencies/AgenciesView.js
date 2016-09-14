Ext.define('AppCamp.view.agencies.AgenciesView',{
	extend: 'Ext.dataview.DataView',
	xtype: 'agenciesview',
	controller: 'agenciesview',
	viewModel: 'agenciesview',
	plugins: ['headingsetter'],

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
});
