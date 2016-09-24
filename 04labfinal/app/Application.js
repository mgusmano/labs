Ext.define('AppCamp.Application', {
	extend: 'Ext.app.Application',
	name: 'AppCamp',
	requires: ['AppCamp.*'],

	launch: function () {
		debugger;
		this.getServerData()
		.then(function(response) {
			Ext.MenuData = response.menuData;
			Ext.Viewport.add({ xtype: 'mainview' });
		}, function(e) {
			console.log(e);
		})
	},

	getServerData: function () {
		return new Ext.Promise(function (resolve, reject) {
			try {
				Ext.Ajax.request({
					url: 'resources/app/data/menu.json',
					success: function(response, opts) {
						var menuData = Ext.decode(response.responseText);
						return resolve({ menuData: menuData });
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
