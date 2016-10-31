Ext.define('AppCamp.view.editing.Editingontroller', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.editing',
	
	onEditingClick: function() {
		Session.editing = true;
		var text = this.lookup('text');
		text.setValue('editing');
		
	},

	onNotEditingClick: function() {
		Session.editing = false;
		var text = this.lookup('text');
		text.setValue('not editing');
	}

});
