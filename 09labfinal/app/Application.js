Ext.define('AppCamp.Application', {
	extend: 'Ext.app.Application',
	name: 'AppCamp',
	requires: [
		'AppCamp.*',
		'Ext.pivot.Grid',
		'Ext.layout.Fit'
	],
	stores: [
		'AppCamp.store.AgencyStore',
		'AppCamp.store.AgencyPortfolioStore'
	],
	profiles: ['Phone', 'Tablet'],
	defaultToken : 'spendingdetailview',

	init: function () {
		Ext.Viewport.setController({type: 'viewport'});
		Ext.Viewport.getController().init();
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
