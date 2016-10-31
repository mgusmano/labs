Ext.define('AppCamp.view.main.Actions',{
	extend: 'Ext.Container',
	xtype: 'app-actions',
	cls: 'actions',
	items: [
		{
			xtype: 'button',
			ui: 'navtoggle',
			cls: 'poweroff',
			width: '100%',
			handler: 'onActionsViewLogoutTap',
			iconCls: 'x-fa fa-power-off',
			text: 'Log out',
			textAlign: 'left'
		}
	]
});
