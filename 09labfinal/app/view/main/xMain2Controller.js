// Ext.define('AppCamp.view.main.Main2Controller', {
// 	extend: 'Ext.app.ViewController',
// 	alias: 'controller.main2',
// 	routes: { 
// 		':xtype': {
// 			before: 'checkAuth',
// 			action: 'mainRoute'
// 		}
// 	},

// 	init: function() {
// 		console.log('MainController-init');
// 		Ext.getBody().removeCls('launching');
// 	},

// 	checkAuth: function(xtype, action) {
// 		console.log('MainController-checkAuth');
// 		var loggedin = State.get("loggedin");
// 		if ( loggedin != true ) {
// 			misc.removeCard(this.getView(), 'home');
// 			misc.showCard(this.getView(), 'login');
// 		}
// 		else {
// 			action.resume();
// 		}
// 	},

// 	mainRoute:function(xtype) {
// 		misc.showCard(this.getView(), 'home');
// 	}

// });
