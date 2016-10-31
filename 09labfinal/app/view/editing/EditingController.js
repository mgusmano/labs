Ext.define('AppCamp.view.editing.EditingController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.app-editing',

	onActivate: function() {
		var text = this.lookup('text');
		text.setValue('editing is: ' + Session.editing);
	},

	onEditingClick: function() {
		Session.editing = true;
		var text = this.lookup('text');
		text.setValue('editing is: ' + Session.editing);
	},

	onNotEditingClick: function() {
		Session.editing = false;
		var text = this.lookup('text');
		text.setValue('editing is: ' + Session.editing);
	}

});
