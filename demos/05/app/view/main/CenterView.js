Ext.define('AppCamp.view.main.CenterView', {
	extend: 'Ext.navigation.View',
	xtype: 'centerview',
	id: 'centerview',
	requires: [ 
		'AppCamp.view.base.BaseView',
		'AppCamp.view.dashboard.DashboardView',
		'AppCamp.view.agencies.AgenciesView',
		'AppCamp.view.spendingdetail.SpendingDetailView'
	],
	navigationBar: false,
	items: [
		{ xtype: 'dashboardview' },
		{ xtype: 'agenciesview' },
		{ xtype: 'spendingdetailview' }
	]
});