Ext.define('AppCamp.view.binding.BindingViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.bindingview',

	initViewModel: function(viewModel){
//		viewModel.bind('{agency}', this.onAgencyChange, this);
	}

	// onAgencyChange: function(a) {
	// 			//var a = get('agency');
	// 			this.fireEvent('agentselected', a);
		
	// },

	// updateAgent: function(value) {
	// 	console.log(value);
	// 	return value;
	// },

	// onSelect: function(dataview, record) {
	// 	this.getViewModel().set('agent', record)
	// }
});
