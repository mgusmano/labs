Ext.define('dashboardview', { extend: 'Ext.Container', xtype: 'dashboardview', html: 'dashboardview' });
Ext.define('agenciesview', { extend: 'Ext.Container', xtype: 'agenciesview', html: 'agenciesview' });
Ext.define('spendingdetailview', { extend: 'Ext.Container', xtype: 'spendingdetailview', html: 'spendingdetailview' });

//Ext.Loader.setEnabled(false);

Ext.Loader.setConfig({
	enabled: false
});

Ext.application({
	name: 'AppCamp',
	requires: [
		'Ext.data.TreeStore'
	],
	launch: function () {
		Ext.Viewport.add(
			{ 
				xtype: 'container',
				layout: 'fit',
				items: [
					{
						xtype: 'container',
						docked: 'left',
						width: 200,
						layout: 'vbox',
						style: 'background:lightgray;',
						items: [
							{
								xtype: 'treelist',
								id: 'menuview',
								flex: 1,
								style: 'background:lightblue;',
								store: {
									root: {
										expanded: true,
										children: [
											{ iconCls: 'x-fa fa-dashboard', text: 'Dashboard', xtype: 'dashboardview', leaf: true },
											{ iconCls: 'x-fa fa-institution', text: 'Agencies', xtype: 'agenciesview', leaf: true },
											{ iconCls: 'x-fa fa-dollar', text: 'Spending Detail', xtype: 'spendingdetailview', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page01', xtype: 'page01view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page02', xtype: 'page02view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page03', xtype: 'page03view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page04', xtype: 'page04view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page05', xtype: 'page05view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page06', xtype: 'page06view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page07', xtype: 'page07view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page08', xtype: 'page08view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page09', xtype: 'page09view', leaf: true }
										]
									}
								},
								listeners: {
									selectionchange: function (tree, node) {
										var centerview = Ext.getCmp('centerview');
										var xtype = node.get('xtype');
										var page;
										try {
											var isCreated = Ext.ClassManager.isCreated(xtype);
											console.log(isCreated);
											page = Ext.create({ xtype: xtype });
											console.log('setActiveItem for ' + xtype);
											centerview.setActiveItem(page);
										}
										catch(ex) {
											Ext.Loader.loadScript({
												url: 'resources/views/' + xtype + '.js',
												onLoad: function() {
													console.log('Retrieved from Server');
													page = Ext.create({ xtype: xtype });
													console.log('setActiveItem for ' + xtype);
													centerview.setActiveItem(page);
												},
												onError: function() {
													console.log('loadscript failed');
												}
											})
										}
									}
								}
							}
						]
					},
					{
						xtype: 'container',
						id: 'centerview',
						flex: 1,
						layout: 'card',
						style: 'background:lightyellow;'
					}
				]
			}
		);
	}
});
