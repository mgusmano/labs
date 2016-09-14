Ext.define('AppCamp.view.reports.ReportsView',{
	extend: 'BaseContainer',
	xtype: 'reports-reportsview',
	controller: 'reports-reportsview',
	viewModel: 'reports-reportsview',
	layout: 'vbox',

	items: [
		{
			xtype: 'selectfield',
			reference: 'reportsselectfield',
			margin: 10,
			usePicker: false,
			defaultTabletPickerConfig : {
				width : 400
			},
			label: 'Report:',
			listeners: {
				change: 'onReportsViewSelectfieldChange'
			}
		},
		{
			xtype: 'pivotgrid',
			reference: 'reportspivotgrid',
			margin: 10,
			shadow: true,
			flex: 1,
			matrix: {
				type: 'local',
				store: 'AgencyPortfolioStore'
			}
		}
	]
});
