Ext.define('AppCamp.view.main.HeaderView',{
	extend: 'Ext.Toolbar',
	xtype: 'headerview',
	reference: 'headerview',
	//cls: 'headerview',

	items: [
		{
			xtype: 'button',
			ui: 'navtoggle',
			reference: 'navtoggle',
			handler: 'onHeaderViewNavToggle',
			// listener: {
			// 	click:'onHeaderViewNavToggle'
			// },

			iconCls: 'x-fa fa-navicon'
		},
		{ 
			xtype: 'container', 
			id: 'mjg',
			//bind: { html: '{title}' + ' - ' +  '{heading}' }
			bind: { html: '{heading}' }
		},
		'->',
		{ 
			xtype: 'container'
			//bind: { html: '{agency.data}' }
		}
	]
});
