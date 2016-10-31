Ext.define('AppCamp.view.binding.BindingModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.app-binding',

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
