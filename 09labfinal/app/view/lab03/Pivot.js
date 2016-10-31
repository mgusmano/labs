Ext.define('AppCamp.view.lab03.Pivot',{
	extend: 'BaseContainer',
	xtype: 'app-pivot',
	controller: 'app-pivot',
	viewModel: 'app-pivot',
	layout: 'fit',
	items: [
		{
			xtype: 'pivotgrid',
			reference: 'reportspivotgrid',
			margin: 10,
			shadow: true,
			flex: 1,
			matrix: {
				type: 'local',
				store: 'AgencyPortfolioStore',
				colGrandTotalsPosition: 'last',
				topAxis: [
					{ 
						dataIndex: 'typeOfInvestment' 
					}
				],
				leftAxis: [
					{ 
						dataIndex: 'agencyName', 
						header: 'Agency', 
						width: 375 
					}
				],
				aggregate: [
					{ 
						dataIndex: 'totalITspendingCYB', 
						header: 'Total IT spending', 
						width: 200, 
						align: 'right', 
						renderer: function(v) {
							if (v == undefined) {
								return '-';
							}
							else {
								return Ext.util.Format.currency(v,'$',2)
							}
						}
					}
				]
			}
		}
	]
});
