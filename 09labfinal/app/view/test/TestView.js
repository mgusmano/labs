Ext.define('AppCamp.view.test.TestView',{
	extend: 'BaseContainer',
	xtype: 'testview',
	layout: 'vbox',

	items: [
		{
			xtype: 'list',
			margin: 10, shadow: true,
			itemTpl: '<div class="contact">{name} <strong>{seniority}</strong></div>',
			grouped: true,
			store: {
				fields: ['name', 'seniority', 'department'],
				groupField: 'department',
				data: [
					{ name: 'Michael Scott', seniority: 7, department: 'Management' },
					{ name: 'Dwight Schrute', seniority: 2, department: 'Sales' },
					{ name: 'Jim Halpert', seniority: 3, department: 'Sales' },
					{ name: 'Kevin Malone', seniority: 4, department: 'Accounting' },
					{ name: 'Angela Martin', seniority: 5, department: 'Accounting' }
				]
			}
		}
	]
});
