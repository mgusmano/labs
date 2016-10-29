Ext.define('AppCamp.util.Message', {
	singleton: true,
	alternateClassName: ['Message'],

	unmatchedRoute: function(route, me) {
		var token = AppCamp.getApplication().getDefaultToken().toString();
		Ext.Msg.alert('<div style="color:red;font-size:24px;">ROUTE ERROR</div>', 
			'<div style="font-size:18px;">' + 
			'<div>route is not found:</div>' + 
			'<div>' + route + '</div>' + 
			'<br><br>' +
			'<div>You will be routed here:</div>' +
			'<div>' + token + '</div>' +
			'</div>', 
			function() { me.redirectTo(token, true) }
		);
	},

	notAuthorized: function() {
		Ext.Msg.alert('<div style="color:red;font-size:24px;">NOT AUTHORIZED</div>', 
			'<div>You are not authorized for the AppCamp Application</div>' + 
			'<br><br>' +
			'<div>Run for President</div>' +
			'<div>or</div>' +
			'<div>contact Sencha</div>' +
			'' +
			'',
			Ext.emptyFn
			//function() { alert('HI') }
		);
	},


});