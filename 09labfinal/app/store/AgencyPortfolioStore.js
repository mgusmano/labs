Ext.define('AppCamp.store.AgencyPortfolioStore', {
	extend: 'Ext.data.Store',
	storeId: 'AgencyPortfolioStore',
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
});