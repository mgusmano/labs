Ext.define('AppCamp.view.main.MainView', {
	extend: 'Ext.Container',
	xtype: 'mainview',
	layout: 'fit',
	items: [
		//{	xtype: 'container', html: 'sidebarview', docked: 'left', width: 225, style: 'background:lightgray;' },
		{
			xtype: 'container', html: 'sidebarview', docked: 'left', width: 225, style: 'background:lightgray;',
			items: [
				{
					xtype: 'treelist',
					docked: 'left',
					width: 225,
					style: 'background:lightgray;',
					store: {
						root: {
							expanded: true,
							children: [
								{ iconCls: 'x-fa fa-dashboard', text: 'Dashboard', xtype: 'dashboardview', leaf: true },
								{ iconCls: 'x-fa fa-institution', text: 'Agencies', xtype: 'agenciesview', leaf: true },
								{ iconCls: 'x-fa fa-dollar', text: 'Spending Detail', xtype: 'spendingdetailview', leaf: true }
							]
						}
					},
					listeners: {
						selectionchange: function (tree, node) {
							var centerview = Ext.getCmp('centerview');
							var xtype = node.get('xtype');
							centerview.setActiveItem(xtype);
						}
					}
				}
			]
		},

		{ xtype: 'container', html: 'headerview', docked: 'top', height: 50, style: 'background:lightblue;' },
		//{ xtype: 'container', html: 'centerview', flex: 1, style: 'background:lightyellow;' },
		{
			xtype: 'navigationview',
			id: 'centerview',
			flex: 1,
			style: 'background:lightyellow;',
			navigationBar: false,
			items: [
				{ xtype: 'dashboardview' },
				{ xtype: 'agenciesview' },
				{ xtype: 'spendingdetailview' }
			]
		},
		{ xtype: 'container', html: 'footerview', docked: 'bottom', height: 30, style: 'background:lightblue;' },
		{	xtype: 'container', html: 'detailview', docked: 'right', width: 70, style: 'background:lightgreen;' },
	]


	// items: [
	// 	{
	// 		xtype: 'treelist',
	// 		width: 225,
	// 		style: 'background:lightgray;',
	// 		store: {
	// 			root: {
	// 				expanded: true,
	// 				children: [
	// 					{ iconCls: 'x-fa fa-dashboard', text: 'Dashboard', xtype: 'dashboardview', leaf: true },
	// 					{ iconCls: 'x-fa fa-institution', text: 'Agencies', xtype: 'agenciesview', leaf: true },
	// 					{ iconCls: 'x-fa fa-dollar', text: 'Spending Detail', xtype: 'spendingdetailview', leaf: true }
	// 				]
	// 			}
	// 		},
	// 		listeners: {
	// 			selectionchange: function (tree, node) {
	// 				var centerview = Ext.getCmp('centerview');
	// 				var xtype = node.get('xtype');
	// 				centerview.setActiveItem(xtype);
	// 			}
	// 		}
	// 	},
	// 	{
	// 		xtype: 'navigationview',
	// 		id: 'centerview',
	// 		flex: 1,
	// 		style: 'background:darkgray;',
	// 		navigationBar: false,
	// 		items: [
	// 			{ xtype: 'dashboardview' },
	// 			{ xtype: 'agenciesview' },
	// 			{ xtype: 'spendingdetailview' }
	// 		]
	// 	}
	// ]
});
