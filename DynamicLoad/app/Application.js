Ext.define('AppCamp.Application', {
	extend: 'Ext.app.Application',
	name: 'AppCamp',
	requires: [
		'Ext.data.TreeStore',
		'Ext.app.Application'
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
											{ iconCls: 'x-fa fa-cog', text: 'page01', xclass: 'AppCamp.view.Page01View', xtype: 'page01view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page02', xclass: 'AppCamp.view.Page02View', xtype: 'page02view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page03', xclass: 'AppCamp.view.page03.Page03View', xtype: 'page03view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page04', xclass: 'AppCamp.view.Page04View', xtype: 'page04view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page05', xclass: 'AppCamp.view.Page05View', xtype: 'page05view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page06', xclass: 'AppCamp.view.Page06View', xtype: 'page06view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page07', xclass: 'AppCamp.view.Page07View', xtype: 'page07view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page08', xclass: 'AppCamp.view.Page08View', xtype: 'page08view', leaf: true },
											{ iconCls: 'x-fa fa-cog', text: 'page09', xclass: 'AppCamp.view.Page09View', xtype: 'page09view', leaf: true }
										]
									}
								},
								listeners: {
									//**
									selectionchange: function (tree, node) {
										var centerview = Ext.getCmp('centerview');
										var xtype = node.get('xtype');
										var xclass = node.get('xclass');

										if (!Ext.ClassManager.isCreated(xclass)) {
											Ext.Loader.loadScript({
												url: '' + xtype + '.js',
												onLoad: function() {
													console.log(xtype + ' retrieved from server');
													centerview.setActiveItem(xtype);
												},
												onError: function() { console.log('Ext.Loader.loadScript failed'); }
											})
										}
										else {
											console.log(xtype + ' retrieve NOT needed');
											centerview.setActiveItem(xtype);
										}
									}
									//**
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
