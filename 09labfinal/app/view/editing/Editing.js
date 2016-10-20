Ext.define('AppCamp.view.editing.Editing',{
	extend: 'BaseContainer',
	xtype: 'editing',
	controller: 'editing',
	viewModel: 'editing',

	margin: 20, shadow: true,
	items: [
		{ xtype: 'button', text: 'editing', handler: 'onEditingClick' },
		{ xtype: 'button', text: 'not editing', handler: 'onNotEditingClick' }
	]
});
