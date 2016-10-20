Ext.define('AppCamp.view.login.LoginViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.loginview',

	init: function() {
		var refs = this.getReferences();
		this.loginview = refs.loginview;
		this.formpanel = refs.formpanel;
		this.formpanel.setValues({ username: 'donald.trump', password: 'usa' })
	},

	onLoginViewButtonClick: function() {
		var me = this;
		var values = this.formpanel.getValues();
		Ext.Viewport.setMasked({ xtype: 'loadmask', message: '' });
		Session.login(values.username, values.password)
		.then(function() {
			Ext.Viewport.setMasked(false);
			me.redirectTo( location.hash.slice(1), true );

			//fire event instead
			//AppCamp.getApplication().launch();
		})
		.catch(function(errors) {
			Ext.Msg.alert('<div style="color:red;font-size:24px;">NOT AUTHORIZED</div>', 
				'<div>You are not authorized for the AppCamp Application</div>' + 
				'<br><br>' +
				'<div>Run for President</div>' +
				'<div>or</div>' +
				'<div>contact Sencha</div>' +
				'' +
				'', 
				//Ext.emptyFn
				function() { Ext.Viewport.setMasked(false); }
			);
		});
	}
});
