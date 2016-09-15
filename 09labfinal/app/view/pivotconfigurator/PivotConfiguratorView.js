Ext.define('AppCamp.view.pivotconfigurator.PivotConfiguratorView',{
	extend: 'BaseContainer',
	xtype: 'pivotconfigurator-pivotconfiguratorview',
	controller: 'pivotconfigurator-pivotconfiguratorview',
	viewModel: 'pivotconfigurator-pivotconfiguratorview',
	layout: 'vbox',

	items: [
		{
			xtype: 'toolbar',
			docked: 'top',
			items: [
				{
					xtype: 'button',
					reference: 'pivotconfiguratorbutton',
					text: 'Show Configurator',
					handler: 'onPivotConfiguratorShowConfigurator'
				}
			]
		},
		{
			xtype: 'pivotgrid',
			reference: 'pivotconfiguratorpivotgrid',
			margin: 10,
			shadow: true,
			flex: 1,
			matrix: {
				type: 'local',
				store: 'AgencyPortfolioStore',
				colGrandTotalsPosition: 'none',
				topAxis: [],
				leftAxis: [],
				aggretate: []
			},
			listeners: {
				configchange: function(panel, config, eOpts) {
					this.reconfigurePivot({'colGrandTotalsPosition': 'last' })
				}
			},

			plugins: [
				{ type: 'columnresizing' }, 
				{
					type: 'pivotconfigurator',
					width: 500,

					fields: [
						{
							dataIndex:  'totalITspendingCYB',
							header:     'Total IT Spending',
							aggregator: 'sum',
							formatter: 'number("$0,000.00")',
							align: 'right',
							width: 200,
							settings: {
								renderers: {
									'$0,000.00': 'spendRenderer'
								},
								allowed: ['aggregate']
							}
						}, 
						{
								dataIndex:  'agencyName',
								header:     'Agency Name',
								width: 400,
								settings: {
										aggregators: ['count']
										// renderers: {
										//     'Colored 0,000.00': 'coloredRenderer'
										// },
										// Define here custom formatters that ca be used on this dimension
								}
						}, 
						{
								dataIndex:  'bureauName',
								header:     'Bureau Name',
								settings: {
										aggregators: ['count']
								}
						}, 
						{
								dataIndex:  'feaBRMservicesPrimaryServiceArea',
								header:     'Primary Service Area',
								settings: {
										aggregators: ['count']
								}
						},
						{
								dataIndex:  'partOfITPortfolio',
								header:     'IT Portfolio',
								settings: {
										aggregators: ['count']
								}
						},
						{
								dataIndex:  'typeOfInvestment',
								header:     'Type Of Investment',
								settings: {
										aggregators: ['count']
								}
						} 
					]
			}]
		}
	]
});
