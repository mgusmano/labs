Ext.define('AppCamp.view.home.Header',{
	extend: 'Ext.Toolbar',
	xtype: 'app-header',
	items: [
		{
			xtype: 'button',
			ui: 'navtoggle',
			reference: 'navtoggle',
			handler: 'onHeaderViewNavToggle',
			iconCls: 'x-fa fa-navicon'
		},
		{ 
			xtype: 'container', 
			//bind: { html: '{title}' + ' - ' +  '{heading}' }
			bind: { html: '{heading}' }
		},
		'->',
		{ 
			xtype: 'container',
			bind: { html: '{agencyName}' }
		}
	]
});