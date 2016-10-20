Ext.define('AppCamp.view.main.ActionsView',{
	extend: 'Ext.Container',
	xtype: 'actionsview',
	reference: 'actionsview',
	cls: 'actionsview',
	margin: 10,
	items: [
		{
			xtype: 'button',
			width: '100%',
			handler: 'onActionsViewLogoutTap',
			iconCls: 'x-fa fa-power-off',
			text: 'Log out',
			textAlign: 'left'
		}
	]


				// {
				// 	xtype: 'selectfield',
				// 	style: {backgroundColor:'white',xcolor:'white'} ,

				// 	//id: 'sf',
				// 	reference: 'selectfieldLogon',
				// 	usePicker: 'auto',
				// 	//label: 'Logon as:',
				// 	options: [
				// 		{ text: 'Donald Trump', value: { firstName: 'Donald', lastName: 'Trump' } },
				// 		{ text: 'Hillary Clinton', value: { firstName: 'Hillary', lastName: 'Clinton' } },
				// 		{ text: 'Barack Obama', value: { firstName: 'Barack', lastName: 'Obama' } } 
				// 	],
				// 	listeners: {
				// 		change: 'onSelectfieldLogonChange'
				// 	}
				// },



		// {
		// 		xtype: 'button',
		// 			docked: 'bottom',
		// 		handler: 'onProfileTap',
		// 		//ui: 'large flat dark picture',
		// 		//iconCls: 'person-picture',
		// 		textAlign: 'left',
		// 		text: '<div style="color:white;">a</div>',
		// 		// bind: {
		// 		//     icon: '{user.picture}',
		// 		//     text: '<div style="color:white;">a</div><div class="title">a{user.firstname}</div>'+
		// 		//         '<div class="value">b{user.username}</div>'
		// 		// }
		// },




});
