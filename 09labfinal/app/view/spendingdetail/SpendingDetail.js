Ext.define('AppCamp.view.spendingdetail.SpendingDetail',{
	extend: 'AppCamp.view.base.BaseContainer',
	xtype: 'app-spendingdetail',
	layout: 'fit',
	items: [
		{
			xtype: 'grid',
			store: 'AgencyPortfolioStore',
			columns: [
				{ dataIndex: 'agencyCode', text: 'agencyCode', width: 300 },
				{ dataIndex: 'agencyName', text: 'agencyName', type: 'string', width: 300 },
				{ dataIndex: 'uniqueInvestmentIdentifier', text: 'uniqueInvestmentIdentifier', type: 'string', width: 300 },
				{ dataIndex: 'bureauCode', text: 'bureauCode', type: 'string', width: 300 },
				{ dataIndex: 'bureauName', text: 'bureauName', type: 'string', width: 300 },
				{ dataIndex: 'partOfITPortfolio', text: 'partOfITPortfolio', type: 'string', width: 300 },
				{ dataIndex: 'typeOfInvestment', text: 'typeOfInvestment', type: 'string', width: 300 },
				{ dataIndex: 'lineItemDescriptor', text: 'lineItemDescriptor', type: 'string', width: 300 },
				{ dataIndex: 'investmentTitle', text: 'investmentTitle', type: 'string', width: 300 },
				{ dataIndex: 'investmentDescription', text: 'investmentDescription', width: 300 },
				{ dataIndex: 'feaBRMservicesPrimaryServiceArea', text: 'feaBRMservicesPrimaryServiceArea', type: 'string', width: 300 },
				{ dataIndex: 'totalITspendingCYB',text: 'totalITspendingCYB', width: 200, 
					align: 'right', renderer: function(v) {
						return Ext.util.Format.currency(v,'$',2)
					}
				}
			]
		}
	]
});
