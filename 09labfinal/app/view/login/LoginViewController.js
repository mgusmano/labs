Ext.define('AppCamp.view.login.LoginViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.loginview',
	required: [
			'App.manager.Session'
	],

	init: function() {
			// TODO(SB) provide a view with some existing accounts, fetched
			// server side (e.g. Server.example.accounts public service)
			this.lookup('form').setValues({
					username: 'donald.trump',
					password: 'usa'
			})
	},

	privates: {

			//in a real application this would be a server call
			getRole: function(username) {
				var role;
				switch(username) {
					case 'barack.obama':
							role = 'president';
							break;
					case 'donald.trump':
							role = 'candidate';
							break;
					case 'hillary.clinton':
							role = 'candidate';
							break;
					default:
							role = 'notauthorized';
							break;
				}
				return role;
			},

			onLoginTap:  function() {
					var me = this,
							form = this.lookup('form'),
							values = form.getValues();

					//form.clearInvalid();

				//   Ext.Viewport.setMasked({ xtype: 'loadmask', message: '' });

					Session.login(values.username, values.password)
					.catch(function(errors) {
							//form.markInvalid(errors.errors);
							Ext.Msg.alert('<div style="color:red;font-size:24px;">NOT AUTHORIZED</div>', 
								'<div>You are not authorized for the AppCamp Application</div>' + 
								'<br><br>' +
								'<div>Run for President</div>' +
								'<div>or</div>' +
								'<div>contact Sencha</div>' +
								'' +
								'', 
								Ext.emptyFn);
					})
					.then(function() {
							Ext.Viewport.setMasked(false);
							AppCamp.getApplication().launch();
					});




				// if (this.getRole(values.username) == 'notauthorized') {
				// 	Ext.Msg.alert('<div style="color:red;font-size:24px;">NOT AUTHORIZED</div>', 
				// 		'<div>You are not authorized for the AppCamp Application</div>' + 
				// 		'<br><br>' +
				// 		'<div>Run for President</div>' +
				// 		'<div>or</div>' +
				// 		'<div>contact Sencha</div>' +
				// 		'' +
				// 		'', 
				// 		Ext.emptyFn);
				// }
				// else {
				// 	localStorage.setItem("role", this.getRole(values.username));
				// 	localStorage.setItem("LoggedIn", true);
				// 	localStorage.setItem("username", values.username);
				// 	AppCamp.getApplication().launch();
				// }









					// // routing to the home is handled in the application Route controller.
					// App.manager.Session.login(values.username, values.password)
					//     .catch(function(error) {
					//         // TODO(SB) report form errors
					//     })
					//     .then(function() {
					//         Ext.Viewport.setMasked(false);
					//     })
			}
	}




	// init: function () {
	// 	this.username = this.getReferences().username;
	// 	this.password = this.getReferences().password;
	// 	this.getView().center();
	// },

	// onLoginClick: function() {
	// 	var me = this;
	// 	Ext.Ajax.request({
	// 		//password is sent clear text as a demonstration - use an industry approach to authentication
	// 		url: 'data/login.json?' + 'username=' + me.username.value + '&password=' + me.username.value,
	// 		success: function(response, opts) {
	// 			var data = Ext.decode(response.responseText);
	// 			if (data.login === 'success') {
	// 				localStorage.setItem("LoggedIn", true);
	// 				localStorage.setItem("username", me.username.value);
	// 				me.getView().destroy();
	// 				Ext620757.getApplication().launch();
	// 			}
	// 			else {
	// 				Ext.Msg.alert('Login Failure', 'Login not successful....');
	// 			}
	// 		},
	// 		failure: function(response, opts) {
	// 			alert ('server-side failure with status code ' + response.status);
	// 		}
	// 	});
	// }
});
