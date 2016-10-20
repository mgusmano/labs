Ext.define('AppCamp.view.phone.spendingdetail.Configurator',{
	extend: 'Ext.dataview.List',
	xtype: 'configurator',
	store: 'AgencyStore',
	infinite: true,
	useComponents: true,
	defaultType: 'itemview',

	itemConfig: {
			//ui: 'light', // TODO - timing issue
			userCls: 'dashboard-item shadow',
			width: 200, height: 300,
			//viewModel: true,
			store: { agencyCode: '001', agencyName: 'joe' }
			// bind: {
			// 		ui: 'light',
			// 		//title: '{record.name}',
			// 		//data: '{record}'
			// }
	}


});
