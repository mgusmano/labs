Ext.define('AppCamp.view.main.SidebarView', {
	extend: 'Ext.Container',
	xtype: 'sidebarview',
	layout: 'vbox',
	requires: [ 
		'AppCamp.view.main.MenuView'
	],
	items: [
		{ xtype: 'menuview' }
	]
});