Ext.define('AppCamp.store.AgencyStore', {
	extend: 'Ext.data.Store',
	storeId: 'AgencyStore',
	autoLoad: true,
	//model: 'AppCamp.model.AgencyPortfolioModel',
	proxy: {
		type: 'ajax',
		reader: {
			type: 'json',
			rootProperty: 'result'
		},
		url: 'resources/app/data/agency.json'
	},
	filters: [
		function(item) {
			return item.data.agencyType == '1-CFO Act';
		}
	]
});