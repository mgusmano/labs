Ext.define('AppCamp.view.main.SideBarView',{
	extend: 'Ext.Container',
	xtype: 'sidebarview',
	reference: 'sidebarview',
	cls: 'sidebarview',
	//id: 'sidebarview',
	
	scrollable: true,
	items: [
		{ xtype: 'welcomeview', docked: 'top', height: 100 },
		{ xtype: 'menuview', flex: 1 },
		{ xtype: 'actionsview', docked: 'bottom', height: 30 }
	]
});
