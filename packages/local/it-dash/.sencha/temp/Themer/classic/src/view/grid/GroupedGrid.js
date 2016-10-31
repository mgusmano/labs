Ext.define('Viewer.view.grid.GroupedGrid', {
    extend : 'Ext.grid.Panel',
    xtype: 'c-preview-grouped-grid',
    store: Ext.create('Viewer.store.GroupGridStore'),
    requires: [
        'Ext.grid.feature.Grouping'
    ],
    width: 600,
    height: 400,
    // Need a minHeight. Neptune resizable framed panels are overflow:visible so as to
    // enable resizing handles to be embedded in the border lines.
    minHeight: 200,
    resizable: true,

    features: [{
        ftype: 'grouping',
        groupHeaderTpl: '{columnName}: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})',
        hideGroupedHeader: true,
        startCollapsed: true,
        id: 'restaurantGrouping'
    }],

    initComponent: function() {
        this.store = new Viewer.store.GroupGridStore();

        this.columns = [{
            text: 'Name',
            flex: 1,
            dataIndex: 'name'
        },{
            text: 'Cuisine',
            flex: 1,
            dataIndex: 'cuisine'
        }];

        this.callParent();
    }
});