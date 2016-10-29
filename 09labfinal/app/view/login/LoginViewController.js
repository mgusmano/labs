Ext.define('AppCamp.view.login.LoginViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.loginview',

	init: function() {
		var formpanel = this.lookup('formpanel');
		formpanel.setValues({ username: 'donald.trump', password: 'usa' })
	},

	onLoginViewButtonClick: function() {
		var me = this;
		var formpanel = this.lookup('formpanel');
		var values = formpanel.getValues();
		Ext.Viewport.setMasked({ xtype: 'loadmask', message: '' });
		Session.login(values.username, values.password)
		.then(function() {
			Ext.Viewport.setMasked(false);
			me.redirectTo( location.hash.slice(1), true );
		})
		.catch(function(errors) {
			Message.notAuthorized();
			Ext.Viewport.setMasked(false);
		});
	}
});
