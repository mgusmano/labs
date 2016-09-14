Ext.define('AppCamp.view.main.MainView',{
	extend: 'Ext.Container',
	xtype: 'mainview',
	layout: 'hbox',
	cls: 'mainview',
	reference: 'mainview',
	controller: 'mainview',
	viewModel: 'mainview',
	items: [
		{
			xtype: 'sidebarview', 
			width: 225
		},
		{
			xtype: 'container', 
			flex: 1,
			layout: 'vbox',
			items: [
				{ 
					xtype: 'headerview',
					height: 50,
					docked: 'top' 
				},
				{
					xtype: 'container', 
					flex: 1,
					layout: 'hbox',
					items: [
						{ 
							xtype: 'centerview', 
							flex: 1
						},
						{	
							xtype: 'detailview', 
							width: 70 
						}
					]
				},
				{ 
					xtype: 'footerview',
					height: 30,
					docked: 'bottom'
				}
			]
		}
	]
});
