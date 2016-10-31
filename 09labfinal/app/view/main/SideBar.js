Ext.define('AppCamp.view.main.SideBar',{
	extend: 'Ext.Container',
	xtype: 'app-sidebar',
	cls: 'sidebar',
	scrollable: true,
	items: [
		{ xtype: 'app-welcome', reference: 'welcome', docked: 'top', bind: { height: '{welcomeHeight}'} },
		{ xtype: 'app-menu', reference: 'menu', flex: 1 },
		{ xtype: 'app-actions', reference: 'actions', docked: 'bottom', height: 30 }
	]
});
