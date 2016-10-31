Ext.define('AppCamp.view.login.Login', {
	extend: 'Ext.Container',
	xtype: 'app-login',
	controller: 'app-login',
	cls: 'app-login',
	requires: [
		'Ext.field.Password'
	],
	layout: { type: 'vbox', align: 'center', pack: 'center' },

	items: [
		{
			cls: 'loginheader',
			html:
				'<img class="logo" src="resources/app/images/omb.png" />' +
				'<div class="logintitle">IT Dashboard</div>' +
				'<div class="logincaption">Federal Agency Spending</div>'
		},
		{
			xtype: 'formpanel',
			reference: 'formpanel',
			layout: 'vbox',
			padding: 10,
			items: [
				{ xtype: 'textfield', name: 'username', placeHolder: 'Username', required: true },
				{ xtype: 'passwordfield', name: 'password', placeHolder: 'Password', required: true },
				{ xtype: 'button', text: 'LOG IN', iconAlign: 'right', iconCls: 'x-fa fa-angle-right', handler: 'onLoginViewButtonClick', ui: 'action' }
			]
		},
		{
			cls: 'loginfooter',
			html:
				'<div class="logincaption">ExtJS AppCamp</div>' +
				'<a href="http://www.sencha.com" target="_blank">' +
					'<i class="logo ext ext-sencha"></i>' +
					'<span class="label">Sencha</span>' +
				'</a>'
		}
	]
});
