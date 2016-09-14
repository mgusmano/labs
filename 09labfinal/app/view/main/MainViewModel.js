Ext.define('AppCamp.view.main.MainViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.mainview',
	data: {
		name: 'AppCamp',
		firstName: '',
		lastName: '',
		//minSize: 44,
		navCollapsed: false
	},
	formulas: {
		sidebarWidth: function(get) {
			var width = get('navCollapsed') ? get('minSize') : get('maxSize');
			return width;
		},
		navToggleFlex: function(get) {
			return get('navCollapsed') ? 1 : 0;
		}
	}
});
