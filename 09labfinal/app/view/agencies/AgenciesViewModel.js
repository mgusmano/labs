Ext.define('AppCamp.view.agencies.AgenciesViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.agenciesview',

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
	},

	formulas: {
		name: function (get) {
			var a = get('agency');
			Ext.fireEvent('agentselected', a);
			return a;
		}
	}
});
