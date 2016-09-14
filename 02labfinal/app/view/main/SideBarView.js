Ext.define('AppCamp.view.main.SideBarView',{
	extend: 'Ext.Container',
	xtype: 'sidebarview',
	cls: 'sidebarview',
	layout: 'vbox',
	scrollable: true,
	items: [
		{ xtype: 'welcomeview', height: 100 },
		{ xtype: 'menuview', flex: 1 },
		{ xtype: 'actionview', height: 30 }
	]
});