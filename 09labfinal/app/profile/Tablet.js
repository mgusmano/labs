Ext.define('AppCamp.profile.Tablet', {
	extend: 'Ext.app.Profile',

	views: {
		mainview: 'AppCamp.view.main.Main',
		spendingdetail: 'AppCamp.view.spendingdetail.SpendingDetail'
	},

	isActive: function () {
			return !Ext.platformTags.phone;
	}

	// launch: function () {
	// 	alert('tablet');
	// }
});