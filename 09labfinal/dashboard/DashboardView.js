Ext.define('AppCamp.view.dashboard.DashboardView',{
	extend: 'AppCamp.view.base.BaseContainer',
	xtype: 'dashboardview',
	controller: 'dashboardview',
	viewModel: 'dashboardview',

	// initialize : function() {
	// 	this.on("show", function() {
	// 		this.fireEvent('viewTitle', this.title);
	// 	}, this);
	// 	this.callParent();
	// },

height: '100%',
	cls: 'dashboard',
	scrollable: 'y',

	//layout: 'vbox',
    //layout: {
    //    type: 'vbox',
    //    align: 'stretch'
    //},



	items2: [
		{
				xtype: 'pivotgrid',
				title: 'pivotgrid',
				height: 300,
				matrix: {
					type: 'local',
					store: 'AgencyPortfolioStore',
					//topAxis: [],
					leftAxis: [{ dataIndex: 'agencyName', header: 'Agency', width: 375 }],
					aggregate: [{ dataIndex: 'totalITspendingCYB', header: 'Total IT spending', width: 200 }]
				},
				// 60% width when viewport is big enough,
				// 100% when viewport is small
				cls: 'big-60 small-100 dashboard-item shadow'
		}
	],




	items: [

		{
			xtype: 'grid',
			title: 'grid',
			//fullscreen: true,
			height: 300, 
			//scrollable:	'y',
			//inline: { wrap: true },
			layout: 'fit',
			store: 'AgencyPortfolioStore',
			columns: [
				{ dataIndex: 'agencyCode', text: 'agencyCode', width: 300 },
				{ dataIndex: 'agencyName', text: 'agencyName', type: 'string', width: 300 },
				// { dataIndex: 'uniqueInvestmentIdentifier', text: 'uniqueInvestmentIdentifier', type: 'string', width: 300 },
				// { dataIndex: 'bureauCode', text: 'bureauCode', type: 'string', width: 300 },
				// { dataIndex: 'bureauName', text: 'bureauName', type: 'string', width: 300 },
				// { dataIndex: 'partOfITPortfolio', text: 'partOfITPortfolio', type: 'string', width: 300 },
				// { dataIndex: 'typeOfInvestment', text: 'typeOfInvestment', type: 'string', width: 300 },
				// { dataIndex: 'lineItemDescriptor', text: 'lineItemDescriptor', type: 'string', width: 300 },
				// { dataIndex: 'investmentTitle', text: 'investmentTitle', type: 'string', width: 300 },
				// { dataIndex: 'investmentDescription', text: 'investmentDescription', width: 300 },
				// { dataIndex: 'feaBRMservicesPrimaryServiceArea', text: 'feaBRMservicesPrimaryServiceArea', type: 'string', width: 300 },
				 { dataIndex: 'totalITspendingCYB',text: 'totalITspendingCYB', width: 200, 
				 	align: 'right', renderer: function(v) {
				 		return Ext.util.Format.currency(v,'$',2)
				 	}
				 }
			],
			cls: 'big-60 small-100 dashboard-item shadow'
		},



		{
			xtype: 'container',
			title: 'pivotgridx',
			height: 300,
			shadow: true,
			layout: 'vbox',
			items: [
				{
					xtype: 'pivotgrid',
					//flex: 1,
					height: '100%',
					matrix: {
						type: 'local',
						store: 'AgencyPortfolioStore',
						//topAxis: [],
						leftAxis: [{ dataIndex: 'agencyName', header: 'Agency', width: 375 }],
						aggregate: [{ dataIndex: 'totalITspendingCYB', header: 'Total IT spending', width: 200 }]
					}
				}
			],
				// 60% width when viewport is big enough,
				// 100% when viewport is small
			cls: 'big-60 small-100 vdashboard-item xshadow'
		},
		{
				xtype: 'container',title: 'widget',height: 300,
				cls: 'big-20 small-50 dashboard-item shadow',
				html: '' +
					'<div class="home-panel" style="height:300px">' +
						'<div class="home-panel-title">Title...</div>' +
						'<div class="placeholder"></div>' +
					'</div>'
		},
		{
				xtype: 'list',title: 'widget',height: 300,
				itemTpl: '<div class="contact">{agencyName} <strong>{agencyCode}</strong></div>',
				//grouped: true,
				infinite: true,
				store: 'AgencyPortfolioStore',

				// store: {
				// 	fields: ['name', 'seniority', 'department'],
				// 	groupField: 'department',
				// 	data: [
				// 		{ name: 'Michael Scott', seniority: 7, department: 'Management' },
				// 		{ name: 'Dwight Schrute', seniority: 2, department: 'Sales' },
				// 		{ name: 'Jim Halpert', seniority: 3, department: 'Sales' },
				// 		{ name: 'Kevin Malone', seniority: 4, department: 'Accounting' },
				// 		{ name: 'Angela Martin', seniority: 5, department: 'Accounting' }
				// 	]
				// },

				cls: 'big-20 small-50 dashboard-item shadow'
		},

		{
				xtype: 'panel',title: 'widget',height: 300,
				cls: 'big-20 small-50 dashboard-item shadow'
		},
		{
				xtype: 'panel',title: 'widget',height: 300,
				cls: 'big-40 small-100 dashboard-item shadow'
		},
		{
				xtype: 'panel',title: 'widget',height: 300,
				cls: 'big-20 small-50 dashboard-item shadow'
		},
		{
				xtype: 'panel',title: 'widget',height: 300,
				cls: 'big-60 small-100 dashboard-item shadow'
		},
		{
				xtype: 'panel',title: 'widget',height: 300,
				cls: 'big-40 small-100 dashboard-item shadow'
		}
	]


});
