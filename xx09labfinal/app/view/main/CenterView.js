Ext.define('AppCamp.view.main.CenterView',{
	//extend: 'Ext.navigation.View',
	extend: 'Ext.Container',
	xtype: 'centerview',
	reference: 'centerview',
	cls: 'centerview',
	id: 'centerview',
	layout: {
		type: 'card',
		animation: {
			duration: 300,
			easing: 'ease-out',
			type: 'slide',
			direction: 'right'
		}
	}

// // fade - Ext.fx.animation.Fade
// // fadeOut - Ext.fx.animation.FadeOut
// // flip - Ext.fx.animation.Flip
// // pop - Ext.fx.animation.Pop
// // popOut - Ext.fx.animation.PopOut
// // slide - Ext.fx.animation.Slide
// // slideOut - Ext.fx.animation.SlideOut
// },
});
