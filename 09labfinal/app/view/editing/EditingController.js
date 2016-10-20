Ext.define('AppCamp.view.editing.Editingontroller', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.editing',
	
	onEditingClick: function() {
		misc.editing = true;
	},

	onNotEditingClick: function() {
		misc.editing = false;
	}

});
