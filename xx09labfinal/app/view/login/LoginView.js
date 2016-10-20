Ext.define('AppCamp.view.login.LoginView', {
	extend: 'Ext.Container',
	xtype: 'loginview',
	controller: 'loginview',
	reference: 'loginview',
	cls: 'loginview',
	requires: [
		'Ext.field.Password'
	],
	layout: { type: 'vbox', align: 'center', pack: 'center' },

	items: [
		{
			cls: 'loginviewheader',
			html:
				'<img class="logo" src="resources/app/images/omb.png" />' +
				'<div class="title">IT Dashboard</div>' +
				'<div class="caption">Federal Agency Spending</div>'
		},
		{
			xtype: 'formpanel',
			reference: 'formpanel',
			layout: 'vbox',
			items: [
				{ xtype: 'textfield', name: 'username', placeHolder: 'Username', required: true },
				{ xtype: 'passwordfield', name: 'password', placeHolder: 'Password', required: true },
				{ xtype: 'button', text: 'LOG IN', iconAlign: 'right', iconCls: 'x-fa fa-angle-right', handler: 'onLoginViewButtonClick', ui: 'action' }
			]
		},
		{
			cls: 'loginviewfooter',
			html:
				'<div>ExtJS AppCamp</div>' +
				'<a href="http://www.sencha.com" target="_blank">' +
					'<i class="logo ext ext-sencha"></i>' +
					'<span class="label">Sencha</span>' +
				'</a>'
		}
	]
});

// Ext.define('AppCamp.view.login.LoginView',{
// 	extend: 'Ext.form.Panel',
// 	xtype: 'loginview',
// 	//controller: 'login-loginview',
// 	//viewModel: 'login-loginview',
// 	// requires: [
// 	// 	'Ext.form.Panel',
// 	// 	'Ext620757.view.login.LoginViewController',
// 	// 	'Ext620757.view.login.LoginViewModel'
// 	// ],
// 	title: 'Login Window',
// 	//autoShow: true,
// 	//bodyPadding: 10,
// 	//closable: false,
// 	items: [
// 			{ xtype: 'textfield', name: 'username', reference: 'username', fieldLabel: 'Username', allowBlank: false }, 
// 			{ xtype: 'textfield', name: 'password', reference: 'password', inputType: 'password', fieldLabel: 'Password', allowBlank: false } 
// //			{ xtype: 'displayfield', hideEmptyLabel: false, value: 'Enter any non-blank password' }
// 	],
// 	buttons: [
// 		{ text: 'Login', formBind: true,
// 			listeners: {
// 				click: 'onLoginClick'
// 			}
// 		}
// 	]
// });
