Ext.define('AppCamp.view.main.Footer',{
	extend: 'Ext.Container',
	xtype: 'app-footer',
	cls: 'footer',
	items: [
		{ xtype: 'container', html: '<span class="footercomment">Powered by Sencha ExtJS  -  Inspired by ITDASHBOARD.gov</span>' }
	]
});