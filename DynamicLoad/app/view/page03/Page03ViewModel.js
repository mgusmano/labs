//@tag page03view
Ext.define('AppCamp.view.page03.Page03ViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.page03-page03view',
	data: {
			name: 'AppCamp'
	},
	stores: {
		agencies: {
			autoLoad: true,
			proxy: {
				type: 'ajax',
				reader: {
					type: 'json',
					rootProperty: 'result'
				},
				url: 'resources/app/data/agenciesAllData.json'
			}
		}
	}
});
