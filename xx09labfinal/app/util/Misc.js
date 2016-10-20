Ext.define('AppCamp.util.Misc', {
	singleton: true,
	alternateClassName: ['misc'],

	showViewportCard: function(xtype) {
		item = Ext.Viewport.child('component[xtype=' + xtype + ']');
		//item = Ext.Viewport.getComponent(itemId);
		if (!item) {
			Ext.Viewport.add({ xtype: xtype });
		}
		Ext.Viewport.setActiveItem(xtype);
	},

	getServerData: function () {
		return new Ext.Promise(function (resolve, reject) {
			try {
				//if this is a lot of data, then use the server to get data before you download the Ext JS app
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
	}



});