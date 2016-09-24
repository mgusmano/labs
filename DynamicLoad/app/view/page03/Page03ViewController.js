//@tag page03view
Ext.define('AppCamp.view.page03.Page03ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.page03-page03view',

		onClick: function() {
			alert(AppCamp.isBuilt);
		}
    
});
