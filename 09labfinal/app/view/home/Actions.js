Ext.define('AppCamp.view.home.Actions',{
	extend: 'Ext.Container',
	xtype: 'app-actions',
	reference: 'actions',
	cls: 'actions',
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
});
