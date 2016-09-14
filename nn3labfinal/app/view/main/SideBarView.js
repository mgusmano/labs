Ext.define('AppCamp.view.main.SideBarView',{
	extend: 'Ext.Container',
	xtype: 'sidebarview',
	reference: 'sidebarview',
	cls: 'sidebarview',
	
	layout: 'vbox',
	scrollable: true,
	items: [
		{ xtype: 'welcomeview' },
		{ xtype: 'menuview', flex: 1 }
	]
});