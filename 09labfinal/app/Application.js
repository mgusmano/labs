Ext.define('AppCamp.Application', {
	extend: 'Ext.app.Application',
	name: 'AppCamp',
	requires: [
		'AppCamp.*',
		'Ext.layout.Fit'
	],
	defaultToken : 'home-homeview',
	stores: [
		'AppCamp.store.AgencyStore',
		'AppCamp.store.AgencyPortfolioStore'
	],
	profiles: ['Phone', 'Tablet'],

	launch: function () {
		//var init = Session.init();
		//console.log(init);

		Ext.Viewport.add(
			{ xtype: 'splash-splashview' },
			{ xtype: 'loginview' }
		);
		debugger;

		//var loggedIn = localStorage.getItem("LoggedIn");
		var loggedin = Session.get("loggedin");
		if ( loggedin != true ) {
			Ext.Viewport.setActiveItem('loginview');
		}
		else {
			this.getServerData()
			.then(function(response) {
				AppCamp.MenuData = response.menuData;
				Ext.Viewport.add({ xtype: 'mainview' });
				Ext.Viewport.setActiveItem('mainview');
				Ext.getBody().removeCls('launching');
			}, function(e) {
			console.log(e);
			})
		}
	},

	getServerData: function () {
		return new Ext.Promise(function (resolve, reject) {
			try {
				Ext.Ajax.request({
					url: 'resources/app/data/menu.' + State.get("role") + '.json',
					success: function(response, opts) {
						var menuData = Ext.decode(response.responseText);
						resolve({ menuData: menuData });
					},
					failure: function(response, opts) {
						return reject ('server-side failure with status code ' + response.status);
					}
				});
			}
			catch(err) {
				return reject(err);
			}
		});
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
