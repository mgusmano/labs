Ext.define('AppCamp.view.lab05.PivotChart',{
	extend: 'AppCamp.view.base.BaseContainer',
	xtype: 'app-pivotchart',
	controller: 'app-pivotchart',
	requires: [
		'Ext.chart.CartesianChart',
		'Ext.chart.axis.Numeric',
		'Ext.chart.axis.Category',
		'Ext.chart.series.Bar'
	],
	layout: 'vbox',
	items: [
		{
			xtype: 'pivotgrid',
			reference: 'pivotchartpivotgrid',
			margin: 10,
			shadow: true,
			flex: 1,
			matrix: {
				type: 'local',
				store: 'AgencyPortfolioStore',
				topAxis: [],
				leftAxis: [{ dataIndex: 'typeOfInvestment', header: 'Type Of Investment', width: 375 }],
				aggregate: [{ dataIndex: 'totalITspendingCYB', header: 'Total IT spending', width: 200 }]
			},
			listeners: {
					pivotdone: 'onPivotChartViewPivotDone'
			}
		},
		{
			xtype: 'cartesian',
			reference: 'pivotchartchart',
			margin: 10,
			shadow: true,
			flex: 1,
			//legend: { type: 'sprite', position: 'bottom' },
			series: [
				{ 
					type: 'bar',
					xField: 'Agency',
					yField: ['c1'], 
					stacked: false
				}
			],
			axes: [
				{
					type: 'numeric',
					position: 'left',
					renderer: function (axis, label, layoutContext) {
						var value = layoutContext.renderer(label) / 1000;
						return value === 0 ? '$0' : Ext.util.Format.number(value, '$000,000,000,000.00');
					},
					grid: {
						odd: { fillStyle: 'rgba(255, 255, 255, 0.06)' },
						even: { fillStyle: 'rgba(0, 0, 0, 0.03)' }
					}
				},
				{
					type: 'category',
					fields: 'Agency',
					position: 'bottom'
				}
			]
		}
	]
});
