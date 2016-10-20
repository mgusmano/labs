Ext.define('AppCamp.view.home.CenterView',{
	extend: 'Ext.Container',
	xtype: 'app-center',
	cls: 'center',
//	id: 'center',
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
