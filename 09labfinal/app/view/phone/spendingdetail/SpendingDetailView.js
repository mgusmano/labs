Ext.define('AppCamp.view.phone.spendingdetail.SpendingDetailView',{
	extend: 'Ext.dataview.List',
	xtype: 'spendingdetailview',
	id: 'spendingdetailview',
	store: 'AgencyPortfolioStore',
	infinite: true,

	itemHeight: window.innerHeight - 64,
	bodyPadding: '0 20 20 20',
	striped: true,
	itemTpl: '' + 
		'agencyCode: {agencyCode}' + '<br><br>' +
		'agencyName: {agencyName}' + '<br><br>' +
		'uniqueInvestmentIdentifier: {uniqueInvestmentIdentifier}' + '<br><br>' +
		'bureauCode: {bureauCode}' + '<br><br>' +
		'bureauName: {bureauName}' + '<br><br>' +
		'partOfITPortfolio: {partOfITPortfolio}' + '<br><br>' +
		'typeOfInvestment: {typeOfInvestment}' + '<br><br>' +
		'lineItemDescriptor: {lineItemDescriptor}' + '<br><br>' +
		'investmentTitle: {investmentTitle}' + '<br><br>' +
		'investmentDescription: {investmentDescription}' + '<br><br>' +
		'feaBRMservicesPrimaryServiceArea: {feaBRMservicesPrimaryServiceArea}' + '<br><br>' +
		'totalITspendingCYB: {totalITspendingCYB}' + '<br><br>'


	// defaultType: 'itemview',

	// itemConfig: {
	// 		//ui: 'light', // TODO - timing issue
	// 		userCls: 'dashboard-item shadow',
	// 		viewModel: true,

	// 		bind: {
	// 				ui: 'light',
	// 				//title: '{record.name}',
	// 				data: '{record}'
	// 		}
	// }


});
