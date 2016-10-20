
Ext.define('AppCamp.view.d3treelist.D3TreeListView',{
	extend: 'AppCamp.view.base.BaseContainer',
	xtype: 'd3treelist-d3treelistview',
	controller: 'd3treelist-d3treelistview',
	viewModel: 'd3treelist-d3treelistview',
	layout: 'fit',

	items: [
		{
			xtype: 'd3-treemap',
			margin: 10, shadow: true,
			bind: {
				store: '{stocks}'
			},
			rootVisible: false,
			nodeValue: function (node) {
					return node.data.cap;
			},
			colorAxis: {
					scale: {
							type: 'linear',
							domain: [-5, 0, 5],
							range: ['#E45649', '#ECECEC', '#50A14F']
					},
					field: 'change',
					processor: function (axis, scale, node, field) {
							return node.isLeaf() ? scale(node.data[field]) : '#ececec';
					}
			}
		}
	]
});
