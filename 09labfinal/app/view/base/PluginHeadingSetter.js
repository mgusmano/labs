Ext.define('AppCamp.view.base.PluginHeadingSetter', {
	extend: 'Ext.plugin.Abstract',
	alias: 'plugin.headingsetter',

	onShow: function() {
		var displayHeading;
		if (this.cmp.heading==undefined) {
			displayHeading = '';
		} else {
			displayHeading = ' - ' + this.cmp.heading;
		}
		this.cmp.fireEvent('viewHeading', displayHeading);
	},

	init: function (cmp) {
		this.setCmp(cmp);
		cmp.on("show", this.onShow, this);
	}
});