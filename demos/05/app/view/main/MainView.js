Ext.define('AppCamp.view.main.MainView', {
	extend: 'Ext.Container',
	xtype: 'mainview',
	requires: [ 
		'AppCamp.view.main.SidebarView',
		'AppCamp.view.main.HeaderView',
		'AppCamp.view.main.CenterView',
		'AppCamp.view.main.DetailView',
		'AppCamp.view.main.FooterView'
	],
	layout: 'fit',
	items: [
		{	xtype: 'sidebarview', docked: 'left', width: 250, style: 'background:lightgray;' },
		{ xtype: 'headerview', docked: 'top', height: 50, style: 'background:lightblue;' },
		{ xtype: 'centerview', flex: 1, style: 'background:lightyellow;' },
		{ xtype: 'footerview', docked: 'bottom', height: 30, style: 'background:lightblue;' },
		{	xtype: 'detailview', docked: 'right', width: 70, style: 'background:lightgreen;' },
	]
});
