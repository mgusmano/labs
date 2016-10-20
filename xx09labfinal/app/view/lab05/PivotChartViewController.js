Ext.define('AppCamp.view.lab05.PivotChartViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.lab05-pivotchartview',

	init: function() {
		var refs = this.getReferences();
		this.pivotchartpivotgrid = refs.pivotchartpivotgrid;
		this.pivotchartchart = refs.pivotchartchart;
	},

	onPivotChartViewPivotDone: function(matrix , eOpts) {
		var seriesYField = []; 
		var seriesTitle = [];
		var dataFields = [];
		var data = [];
		var chartSeriesStore;
		var colName = matrix.columns[0].dataIndex;
		var rows = matrix.pivotStore.data.items;
		rows.forEach(function(row) {
			if(row.data[colName] != 'Grand total') {
				data.push({ Agency: row.data[colName], 'c1': row.data['c1'] });
				seriesYField.push(row.data['c1']);
				seriesTitle.push(row.data[colName]);
			}
		});
		dataFields = ['Agency', 'c1'];
		var	store = {
			fields: [dataFields],
			data: data
		}
		var chart = this.pivotchartchart;
		chart.setStore(store);
	}

});
