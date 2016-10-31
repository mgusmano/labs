Ext.define('AppCamp.view.editing.Editing',{
	extend: 'BaseContainer',
	xtype: 'editing',
	controller: 'app-editing',
	viewModel: 'app-editing',
	
	listeners: {
		activate: 'onActivate'
	},

	margin: 20, shadow: true,
	items: [
		{ xtype: 'button', text: 'editing', handler: 'onEditingClick' },
		{ xtype: 'button', text: 'not editing', handler: 'onNotEditingClick' },
		{ xtype: 'textfield', reference: 'text', value: 'editing is: false' }
	]
});
