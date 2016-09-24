Ext.define('AppCamp.view.main.MainViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mainview',
	routes: { 
		':xtype': {
			before: 'checkAuth',
			action: 'Route'
		}
	},

	listen : {
		global: {
			agentselected: 'onAgentSelected'
		},
		controller : {
			'#' : {
				unmatchedroute : 'onUnmatchedRoute'
			}
		}
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
	},

	init: function() {
		var refs = this.getReferences();
		this.sidebarview = refs.sidebarview;
		this.welcomeview = refs.welcomeview;
		this.menuview = refs.menuview;
		this.headerview = refs.headerview;
		this.centerview = refs.centerview;
		this.detailview = refs.detailview;
		this.footerview = refs.footerview;
		this.vm = this.getViewModel();
		var vm = this.vm; //just for this function, dont have to include this.

		if (this.platform == 'phone') {
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
		this.menuview.setStore(AppCamp.MenuData);
		this.redirectTo( location.hash.slice(1), true );
	},

	checkAuth: function(xtype, action) {
		// if (xtype == 'dashboardview') {
		// 	Ext.Viewport.setActiveItem('loginview');
		// 	action.stop();
		// }
		action.resume();
	},

	Route:function(xtype) {
		var node = this.menuview.getStore().findNode('xtype', xtype);
		if (node == null) {
			Ext.Msg.alert('<div style="color:red;font-size:24px;">NOT AUTHORIZED</div>', 
				'<div>Not authorized to access that item</div>' + 
				'<br>' +
				'<div>' + xtype + '</div>' +
				'', 
				Ext.emptyFn);
			return;
		}
		item = this.centerview.child('component[xtype=' + xtype + ']');
		if (!item) {
				try {
					//dynamic loading here
					//read server for 1 Ext.define of the xtype
					if (xtype == 'dashboardview') {
						Ext.Loader.loadScript({
							url: 'dashboard/DashboardView.js',
							onLoad: function() {
								console.log('Retrieved from Server');
								item = this.centerview.add({ xtype: xtype, heading: node.get('text') });
								console.log(xtype + ' added to items collection');
								this.centerview.setActiveItem(xtype);
							},
							onError: function() {
								console.log('FAIL');
							},
							scope: this
						})
					}
					else {
						item = this.centerview.add({ xtype: xtype, heading: node.get('text') });
//						console.log(xtype + ' added to items collection');
						this.centerview.setActiveItem(xtype);
					}
				}
				catch(ex) {
					console.log(ex);
				}
		}
		else {
			this.centerview.setActiveItem(xtype);
		}
		this.menuview.setSelection(node);
		if (node.parentNode.data.text != 'Root') {
			var parentNode = this.menuview.getStore().findNode('text', node.parentNode.data.text);
			//setTimeout(function(){ parentNode.expand(); }, 5);
			Ext.globalEvents.on('idle',function() { parentNode.expand() }, null, { single: true });
		}
	},


	onAgentSelected: function(a) {
		this.vm.set('agencyName', a.data.agencyName)
	},

	// listen: {
	// 	component: {
	// 		'*': {
	// 			viewHeading: function(view) {
	// 				this.vm.set('heading', this.vm.get('title') + heading)
	// 			}
	// 		}
	// 	}
	// },

	control: {
		'*': {
			viewHeading: 'viewHeading'
		}
	},

	viewHeading: function(heading) {
		this.vm.set('heading', this.vm.get('title') + heading)
	},

	platformConfig: {
		phone: {
			platform: 'phone'
		}
	},

	onHeaderViewNavToggle: function () {
		this.vm.set('navCollapsed', !this.vm.get('navCollapsed'));
	},

	onMenuViewSelectionChange: function (tree, node) {
		if (this.platform == 'phone') {
			this.vm.set('navCollapsed', true);
		}
		if (node.get('xtype') != undefined) {
			this.redirectTo( node.get('xtype') );
		}
	},

	onActionsViewLogoutTap: function( ) {
		Session.logout(this.getView());
	}

});
