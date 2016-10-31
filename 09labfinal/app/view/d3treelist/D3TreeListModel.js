Ext.define('AppCamp.view.d3treelist.D3TreeListModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.app-d3treelist',
	requires: [
		'Ext.d3.hierarchy.TreeMap'
	],
	stores: {
		stocks: {
			autoLoad: true,
			type: 'tree',
			fields: [
				'name',
				'description',
				'cap',
				{
					name: 'leaf',
					calculate: function (data) {
							return data.root ? false : !data.children;
					}
				},
				{
					name: 'change',
					calculate: function () {
							return (-5 + Math.random() * 10).toFixed(2); // percentages
					}
				},
				{
					name: 'expanded',
					type: 'boolean',
					defaultValue: true
				}
			],
			proxy: {
				type: 'ajax',
				url: 'resources/app/data/stocksSmall.json'
			}
		}
	}
});