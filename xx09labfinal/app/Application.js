Ext.define('AppCamp.Application', {
	extend: 'Ext.app.Application',
	name: 'AppCamp',
	requires: [
		'AppCamp.*',
		'Ext.pivot.Grid',
		'Ext.layout.Fit'
	],
	defaultToken : 'spendingdetailview',
	stores: [
		'AppCamp.store.AgencyStore',
		'AppCamp.store.AgencyPortfolioStore'
	],
	profiles: ['Phone', 'Tablet'],
	

	// showViewportCard: function(xtype) {
	// 	item = Ext.Viewport.child('component[xtype=' + xtype + ']');
	// 	//item = Ext.Viewport.getComponent(itemId);
	// 	if (!item) {
	// 		Ext.Viewport.add({ xtype: xtype });
	// 	}
	// 	Ext.Viewport.setActiveItem(xtype);
	// },

	launch: function () {
		//test
		var me = this;
		var loggedin = State.get("loggedin");
		if ( loggedin != true ) {
			misc.showViewportCard('loginview');
		}
		else {
			misc.getServerData()
			.then(function(response) {
				AppCamp.MenuData = response.menuData;
				misc.showViewportCard('mainview');
				Ext.getBody().removeCls('launching');
			}, function(e) {
			console.log(e);
			})
		}
	},

	// getServerData: function () {
	// 	return new Ext.Promise(function (resolve, reject) {
	// 		try {
	// 			//if this is a lot of data, then use the server to get data before you download the Ext JS app
	// 			Ext.Ajax.request({
	// 				url: 'resources/app/data/menu.' + State.get("role") + '.json',
	// 				success: function(response, opts) {
	// 					var menuData = Ext.decode(response.responseText);
	// 					resolve({ menuData: menuData });
	// 				},
	// 				failure: function(response, opts) {
	// 					return reject ('server-side failure with status code ' + response.status);
	// 				}
	// 			});
	// 		}
	// 		catch(err) {
	// 			return reject(err);
	// 		}
	// 	});
	// },

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
