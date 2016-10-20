Ext.define('AppCamp.view.main.MainController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.main',
	routes: { 
		':xtype': {
			action: 'mainRoute'
		}
	},
	listen : {
		controller : {
			'#' : {
				unmatchedroute : 'onUnmatchedRoute'
			}
		}
	},

	init: function() {
		console.log('MainController-init');
		var me = this;
		me.getServerData()
		.then(function(response) {
			var vm = me.getViewModel(); 
			if (me.platform == 'phone') {
				vm.set('title', 'IT Dashboard');
				vm.set('minSize', 0);
				vm.set('maxSize', 225);
				vm.set('navCollapsed', true);
			} else {
				vm.set('title', 'The United States Federal Agency IT Dashboard (2016)');
				vm.set('minSize', 44);
				vm.set('maxSize', 225);
				vm.set('navCollapsed', false);
			}
			vm.set('firstname', State.get('firstname'));
			vm.set('lastname', State.get('lastname'));

			me.lookup('menu').setStore(response.menuData);
			me.redirectTo( location.hash.slice(1), true );
		}, function(e) {
			console.log(e);
		})
	},

	mainRoute:function(xtype) {
		console.log('MainController-mainRoute');
		var menu = this.lookup('menu');
		var center = this.lookup('center');
		var node = menu.getStore().findNode('xtype', xtype);
		if (node == null) {
			Ext.Msg.alert('<div style="color:red;font-size:24px;">NOT VALID</div>', 
				'<div>Not a valid route</div>' + 
				'<br>' +
				'<div>' + xtype + '</div>' +
				'', 
				Ext.emptyFn
			);
			this.redirectTo(AppCamp.getApplication().getDefaultToken().toString(), true);
			return;
		}
		if (!center.getComponent(xtype)) {
			center.add({ xtype: xtype, heading: node.get('text') });
		}
		center.setActiveItem(xtype);
		menu.setSelection(node);
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
	},

	platformConfig: {
		phone: {
			platform: 'phone'
		}
	},

	onHeaderViewNavToggle: function () {
		var vm = this.getViewModel();
		vm.set('navCollapsed', !vm.get('navCollapsed'));
	},

	onMenuViewSelectionChange: function (tree, node) {
		var vm = this.getViewModel();
		if (this.platform == 'phone') {
			vm.set('navCollapsed', true);
		}
		if (node.get('xtype') != undefined) {
			this.redirectTo( node.get('xtype') );
		}
	},

	onActionsViewLogoutTap: function( ) {
		var vm = this.getViewModel();
		vm.set('firstname', '');
		vm.set('lastname', '');

		Session.logout(this.getView());
		this.redirectTo(AppCamp.getApplication().getDefaultToken().toString(), true);
	},

	onUnmatchedRoute : function(route) {
		var me = this;
		var token = AppCamp.getApplication().getDefaultToken().toString();
		Ext.Msg.show({
			title: '<div style="color:red;font-size:24px;">ROUTE ERROR</div>',
			width: 800,
			message: '' +
				'<div style="font-size:18px;">' + 
				'<div>route is not found:</div>' + 
				'<div>' + route + '</div>' + 
				'<br><br>' +
				'<div>You will be routed here:</div>' +
				'<div>' + token + '</div>' +
				'</div>', 
			buttons: Ext.MessageBox.OK,
			fn: function() {
				me.redirectTo(token, true);
			}
		});
	}


});
