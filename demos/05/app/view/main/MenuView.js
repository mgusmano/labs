Ext.define('AppCamp.view.main.MenuView', {
	extend: 'Ext.list.Tree',
	xtype: 'menuview',
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
});
