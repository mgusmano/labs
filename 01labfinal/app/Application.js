Ext.define('AppCamp.Application', {
	extend: 'Ext.app.Application',
	name: 'AppCamp',

	launch: function () {
		Ext.Viewport.add(
			{
				xtype: 'container',
				//mainview
				layout: 'hbox',
				items: [
					{
						xtype: 'container', 
						html: 'sidebarview',
						width: 225,
						style: { 'color': 'white', 'background': 'linear-gradient(to bottom right, #000 0%, #3f729b 100%)'} 
					},
					{
						xtype: 'container', 
						flex: 1, 
						layout: 'hbox',
						items: [
							{
								xtype: 'toolbar', 
								html: 'headerview',
								docked: 'top', 
								height: 50,
								style: { 'color': 'black', 'box-shadow': '0 0 10px rgba(51, 51, 51, 0.4)', 'background': '#EDEDED' } 
							},
							{
								xtype: 'navigationview', 
								html: 'centerview',
								flex: 1, 
								navigationBar: false, 
								style: { 'background': '#f1f5f6' } 
							},
							{
								xtype: 'container',
								html: 'detailview',
								width: 70,
								style: { 'background': '#EDEDED'} 
							},
							{ 
								xtype: 'toolbar',
								html: 'footerview',
								height: 30,
								docked: 'bottom', 
								style: { 'color': 'white', 'background': 'linear-gradient(to right, #3f729b 0%, #000 100%)' } 
							}
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


