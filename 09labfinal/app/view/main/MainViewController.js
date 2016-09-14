Ext.define('AppCamp.view.main.MainViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.mainview',
	routes: { 
		':xtype': {
			before: 'checkAuth',
			action: 'Route'
		}
	},

	// minSize:0,
	// maxSize:0,
	// collapsed:true,

	init: function() {
		console.log('MainViewController init');
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

console.log(AppCamp.MenuData);
		this.menuview.setStore(AppCamp.MenuData);
		this.setUser();
	
		this.redirectTo( location.hash.slice(1), true );
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
						console.log(xtype + ' added to items collection');
						this.centerview.setActiveItem(xtype);
						//this.centerview.push({ xtype: xtype });
					}
				}
				catch(ex) {
					alert(ex);
				}
		}
		else {
			this.centerview.setActiveItem(xtype);
		}

		this.menuview.setSelection(node);
	},


	// listen: {
	// 	component: {
	// 		'*': {
	// 			viewTitle: function(view) {
	// 				this.vm.set('view', this.vm.get('title') + ' - ' + view)
	// 			}
	// 		}
	// 	}
	// },

	checkAuth: function(xtype, action) {
		console.log('checkAuth');
		if (xtype == 'dashboardview') {
			Ext.Viewport.setActiveItem('loginview');
			action.stop();
		}
		action.resume();
	},

	listen: {
		global: {
			agentselected: 'onAgentSelected'
		}
	},

	onAgentSelected: function(a) {
		this.vm.set('agencyName', a.data.agencyName)
	},

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
		localStorage.removeItem("role")
		localStorage.removeItem("LoggedIn")
		localStorage.removeItem("username");
		this.getView().destroy();
		AppCamp.getApplication().launch();
	}

});









	// onSelectfieldLogonChange: function( selectfield , newValue , oldValue , eOpts ) {
	// 	this.vm.set('firstName', newValue.data.value.firstName);
	// 	this.vm.set('lastName', newValue.data.value.lastName);
	// },

	// i:1,
	// onNext: function(){
	// 	//debugger;
	// 	var s = (window.innerHeight - 64) * this.i;
	// 	//Ext.getCmp('spendingdetailview').scrollToRecord(this.i,true);
	// 	Ext.getCmp('spendingdetailview').element.scrollBy(0, s, true);
	// 	this.i = this.i + 1;
	// },




		// if (this.vm.get('navCollapsed')==true) {
		// 	this.vm.set('navCollapsed', false);
		// 	//this.sidebarview.setWidth(this.maxSize);
		// 	//this.sidebarview.element.setWidth(this.maxSize);
		// } else {
		// 	this.vm.set('navCollapsed', true);
		// 	//this.sidebarview.setWidth(this.minSize);
		// 	//this.sidebarview.element.setWidth(this.minSize);
		// }


