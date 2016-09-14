Ext.define('AppCamp.view.pivotconfigurator.PivotConfiguratorViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.pivotconfigurator-pivotconfiguratorview',

	init: function() {
		var refs = this.getReferences();
		this.pivotconfiguratorpivotgrid = refs.pivotconfiguratorpivotgrid;
		this.pivotconfiguratorbutton = refs.pivotconfiguratorbutton;
	},

	onPivotConfiguratorShowConfigurator: function() {
		console.log(this.pivotconfiguratorpivotgrid);
		this.pivotconfiguratorpivotgrid.showConfigurator();
	}
});
