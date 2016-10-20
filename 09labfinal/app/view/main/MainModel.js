Ext.define('AppCamp.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.main',
	data: {
		agency: null,
		firstName: '',
		lastName: '',
		navCollapsed: false
	},
	formulas: {
		sidebarWidth: function(get) {
			var width = get('navCollapsed') ? get('minSize') : get('maxSize');
			return width;
		},
		navToggleFlex: function(get) {
			return get('navCollapsed') ? 1 : 0;
		},
		agencyName: function(get) {
			var agency = get('agency');
			if (agency != null) {
				return agency.data.agencyName;
			}
		}
	}
});
