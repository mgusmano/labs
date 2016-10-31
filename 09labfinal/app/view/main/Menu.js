Ext.define('AppCamp.view.main.Menu',{
	extend: 'Ext.list.Tree',
	xtype: 'app-menu',
	cls: 'menu',
	requires: [
		'Ext.data.TreeStore'
	],
	ui: 'nav',
	expanderFirst: false,
	expanderOnly: false,
	bind: { micro: '{navCollapsed}' },
	listeners: {
		selectionchange: 'onMenuViewSelectionChange'
	},

	applySelection: function(node, oldSelection) {
		if (node == null) return;
		if (Session.editing == true) {
			var r = confirm("Unsaved Changes - Select 'Cancel' or you will lose changes");
			if (r == false) {
					return;
			} 
			else {
				Session.editing = false;
				if (node.parentNode.data.text != 'Root') {
					var parentNode = me.getStore().findNode('text', node.parentNode.data.text);
					Ext.globalEvents.on('idle',function() { parentNode.expand() }, null, { single: true });
				}
				return node;
			}
		}
		else {
			if (node.parentNode.data.text != 'Root') {
				var parentNode = this.getStore().findNode('text', node.parentNode.data.text);
				Ext.globalEvents.on('idle',function() { parentNode.expand() }, null, { single: true });
			}
			return node;
		}
	}

});
