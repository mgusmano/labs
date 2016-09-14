Ext.define('AppCamp.view.base.BaseView', {
	extend: 'Ext.Panel',
	padding: '10px',
	initialize : function() {
		this.setTitle(this.xtype);
		this.setHtml(this.xtype);
		this.callParent();
	}
});