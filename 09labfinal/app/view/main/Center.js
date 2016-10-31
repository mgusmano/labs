Ext.define('AppCamp.view.main.CenterView',{
	extend: 'Ext.Container',
	xtype: 'app-center',
	cls: 'center',
	layout: {
		type: 'card',
		animation: {
			duration: 300,
			easing: 'ease-out',
			type: 'slide',
			direction: 'right'
		}
	}
});
