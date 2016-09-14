Ext.define('AppCamp.view.main.MainView',{
	extend: 'Ext.Container',
	xtype: 'mainview',
	reference: 'mainview',
	controller: 'mainview',
	viewModel: 'mainview',

	layout: 'hbox',
	items: [
		{	xtype: 'sidebarview' },
		{	xtype: 'container', flex: 1, layout: 'vbox',
			items: [
				{ xtype: 'headerview', docked: 'top' },
				{
					xtype: 'container', flex: 1 , layout: 'hbox',
					items: [
						{ xtype: 'centerview', flex: 1 },
						{	xtype: 'detailview' }
					]
				},
				{ xtype: 'footerview', docked: 'bottom' }
			]
		}
	]
});
