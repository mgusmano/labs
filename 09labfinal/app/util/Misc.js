Ext.define('AppCamp.util.Misc', {
	singleton: true,
	alternateClassName: ['misc'],

	editing: false,

	confirm: function () {
		var deferred = new Ext.Deferred();
		Ext.Msg.confirm(
			"Unsaved Changes2", 
			"Are you sure you want to abandon?", 
			function(buttonId, opt) {
				deferred.resolve(buttonId)
			}
		);
		return deferred.promise;  // return the Promise to the caller
	},


	confirm2: function() {
		return new Ext.Promise(function (resolve, reject) {
			try {
				Ext.Msg.confirm(
					"Unsaved Changes", 
					"Are you sure you want to abandon?", 
					function(buttonId, opt) {
						resolve (buttonId)
					}
				);
			}
			catch(err) {
				return reject(err);
			}
		});
	},

	removeCard: function(view, xtype) {
		view.remove(xtype);
	},

	showCard: function(view, xtype) {
		item = view.getComponent(xtype);
		if (!item) {
			console.log('add ' + xtype);
			view.add({ xtype: xtype });
		}
		view.setActiveItem(xtype);
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