Ext.define('AppCamp.view.viewport.ViewportController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.viewport',

	init: function() {
		Ext.getBody().removeCls('launching');
	},

	routes: { 
		':xtype': {
			before: 'checkAuth',
			action: 'viewportRoute'
		}
	},

	checkAuth: function(xtype, action) {
		console.log('ViewportController-checkAuth');
		var loggedin = State.get("loggedin");
		if ( loggedin != true ) {
			if (this.mainView) {
				this.mainView.getController().destroy();
				console.log('mainview-destroy');
				this.mainView.destroy();
				this.mainView = null;
			}

			if (!this.loginView) {
				this.loginView = Ext.Viewport.add({xtype: 'app-login'});
			}
			Ext.Viewport.setActiveItem(this.loginView);
			action.stop(true);
		}
		else {
			action.resume();
		}
	},

	viewportRoute:function(xtype) {
		console.log('ViewportController-viewportRoute');
		if (!this.mainView) {
			this.mainView = Ext.Viewport.add({xtype: 'app-main'});
		}
		Ext.Viewport.setActiveItem(this.mainView);

	}


	// listen: {
	// 		controller: {
	// 				'*': {
	// 						login: 'onLogin',
	// 						logout: 'onLogout',
	// 						unmatchedroute: 'onUnmatchedRoute'
	// 				}
	// 		}
	// },

	// routes: {
	// 		login: 'showLogin'
	// },

	// init: function() {
	// 	console.log('ViewportController-init2');
	// 	Ext.getBody().removeCls('launching');
	// },

	// showLogin: function() {
	// 	if (!this.loginView) {
	// 		this.loginView = Ext.Viewport.add({xtype: 'app-login'});
	// 	}
	// 	Ext.Viewport.setActiveItem(this.loginView);
	// },

	// onLogin: function() {
	// 		this.mainView = Ext.Viewport.add({xtype: 'app-main'});
	// 		this.redirectTo(this.originalRoute || '#main');
	// },

	// onLogout: function() {
	// 	this.mainView.destroy();
	// 	this.mainView = null;
	// 	this.originalRoute = location.hash;
	// 	this.redirectTo('#login');
	// },

	// onUnmatchedRoute: function() {
	// 	// If there is a main view allow it to handle the unmatched route.
	// 	if (!this.mainView) {
	// 			this.originalRoute = location.hash;
	// 			this.redirectTo('#login');
	// 	}
	// },

});