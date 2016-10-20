Ext.define('AppCamp.profile.Tablet', {
	extend: 'Ext.app.Profile',

	views: {
		mainview: 'AppCamp.view.main.Main',
		spendingdetailview: 'AppCamp.view.spendingdetail.SpendingDetailView'
	},

	isActive: function () {
			return !Ext.platformTags.phone;
	}

	// launch: function () {
	// 	alert('tablet');
	// }
});