Ext.define('AppCamp.view.pivotconfigurator.PivotConfiguratorViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.pivotconfigurator-pivotconfiguratorview',

	init: function() {
		var refs = this.getReferences();
		this.pivotconfiguratorpivotgrid = refs.pivotconfiguratorpivotgrid;
		this.pivotconfiguratorbutton = refs.pivotconfiguratorbutton;
	},

	onPivotConfiguratorShowConfigurator: function() {
		this.pivotconfiguratorpivotgrid.showConfigurator();
	},

	spendRenderer: function(v) {
		if (v == undefined) {
			return '-';
		}
		else {
			return Ext.util.Format.currency(v,'$',2)
		}
	}
});
