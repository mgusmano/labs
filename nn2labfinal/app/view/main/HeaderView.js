Ext.define('AppCamp.view.main.HeaderView',{
	extend: 'Ext.Toolbar',
	xtype: 'headerview',
	reference: 'headerview',
	cls: 'headerview',
	
	items: [
		{ xtype: 'container', html: '<a class="headertitle" >The United States Federal Agency IT Dashboard (2016)</a>' }
	]
});
