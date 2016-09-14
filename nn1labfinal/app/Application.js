Ext.define('AppCamp.Application', {
	extend: 'Ext.app.Application',
	name: 'AppCamp',

	launch: function () {
		Ext.Viewport.add(
			{
				xtype: 'container',
				layout: 'hbox',
				items: [
					{	xtype: 'container', style: { 'background': 'linear-gradient(to bottom right, #000 0%, #3f729b 100%)', width: '225px'},
				 		html: '<img id="trump" src="resources/app/images/DonaldTrump.jpeg" onclick="sayHi()" class="img-circle">' },
					{	xtype: 'container', flex: 1, layout: 'hbox',
						items: [
							{ xtype: 'toolbar', docked: 'top', style: { 'border-left': '0', 'border-top': '0', 'box-shadow': '0 0 10px rgba(51, 51, 51, 0.4)', 'background-color': '#EDEDED', 'height': '50px' } },
							{ xtype: 'navigationview', border: true, navigationBar: false, flex: 1, style: { 'background': '#f1f5f6' } },
							{ xtype: 'toolbar', docked: 'bottom', style: { 'border-left': '0', 'border-bottom': '0', 'background': 'linear-gradient(to right, #3f729b 0%, #000 100%)', 'height': '30px' } },
							{	xtype: 'container', style: { 'background': '#EDEDED', 'width': '700px'} }
						]
					}
				]
			}
		);
	},

	onAppUpdate: function () {
			Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
					function (choice) {
							if (choice === 'yes') {
									window.location.reload();
							}
					}
			);
	}
});


