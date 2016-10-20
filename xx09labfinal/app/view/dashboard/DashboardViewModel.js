Ext.define('AppCamp.view.dashboard.DashboardViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.dashboardview',

	stores: {
		agencyportfolio: {
			autoLoad: true,
			model: 'AppCamp.model.AgencyPortfolioModel',
			proxy: {
				type: 'ajax',
				url: 'resources/app/data/agencyportfolio.json',
				reader: {
					type: 'json',
					rootProperty: 'result'
				}
			}
		}
	}

});
