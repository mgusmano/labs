Ext.define('AppCamp.view.viewport.ViewportController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.viewport',

	listen : {
		controller : {
			'*' : {
				unmatchedroute : 'onUnmatchedRoute'
			}
		}
	},

	init: function() {},

	routes: { 
		':xtype': {
			before: 'restoreSession',
			action: 'viewportRoute'
		}
	},

	restoreSession: function(xtype, action) {
		var loggedin = State.get("loggedin");
		if ( loggedin != true ) {
			action.stop(true);
			this.terminateSession();
		}
		else {
			action.resume();
		}
	},

	viewportRoute:function(xtype) {
		var session;
		this.initiateSession(session);
	},

	terminateSession: function() {
		//this.setDirectToken(null);
		//this.saveSession(null);
		this.showView('app-login');
	},

	initiateSession: function(session) {
		//this.setDirectToken(session.get('token'));
		//this.saveSession(session);
		this.showView('app-main');
	},

	showView: function(xtype) {
		var view = this.lookup(xtype),
				viewport = this.getView();
		if (!view) {
				viewport.removeAll(true);
				view = viewport.add({ xtype: xtype, reference: xtype });
		}
		viewport.setActiveItem(view);
		Ext.getBody().removeCls('launching');
	},

	onUnmatchedRoute : function(xtype) {
		Message.unmatchedRoute(xtype, this);
	}

});