Ext.define('AppCamp.view.main.FooterView',{
	extend: 'Ext.Container',
	xtype: 'footerview',
	reference: 'footerview',
	cls: 'footerview',
	
	items: [
		{ xtype: 'container', html: '<span class="footercomment">Powered by Sencha ExtJS  -  Inspired by ITDASHBOARD.gov</span>' }
	]
});