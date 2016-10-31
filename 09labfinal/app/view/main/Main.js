Ext.define('AppCamp.view.main.Main',{
	extend: 'Ext.Container',
	xtype: 'app-main',
	controller: 'app-main',
	viewModel: 'app-main',
	layout: 'fit',
	items: [
		{	xtype: 'app-sidebar', reference: 'sidebar', docked: 'left', bind: { width: '{sidebarWidth}'} },
		{ xtype: 'app-header', reference: 'header', docked: 'top', height: 50 },
		{ xtype: 'app-center', reference: 'center' },
		{	xtype: 'app-detail', reference: 'detail', docked: 'right', width: 0 },
		{ xtype: 'app-footer', reference: 'footer', docked: 'bottom', height: 30 }
	]
});
