Ext.define('AppCamp.view.main.MenuView',{
	extend: 'Ext.list.Tree',
	xtype: 'menuview',
	reference: 'menuview',
	cls: 'menuview',
	id: 'menuview',
	requires: [
		'Ext.data.TreeStore'
	],

	ui: 'nav',
	expanderFirst: false,
	expanderOnly: false,
	bind: { 
		micro: '{navCollapsed}'
		//store: '{menuStore}' 
	},
	listeners: {
		selectionchange: 'onMenuViewSelectionChange'
	}
});
