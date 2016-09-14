Ext.define('AppCamp.view.main.MainView',{
	extend: 'Ext.Container',
	xtype: 'mainview',
	reference: 'mainview',
	controller: 'mainview',
	viewModel: 'mainview',

	layout: 'fit',
	items: [
		{	xtype: 'sidebarview', docked: 'left', bind: { width: '{sidebarWidth}'} },
		{ xtype: 'headerview', docked: 'top', height: 50 },
		{ xtype: 'centerview' },
		{	xtype: 'detailview', docked: 'right', width: 0 },
		{ xtype: 'footerview', docked: 'bottom', height: 30 }
	]
});
