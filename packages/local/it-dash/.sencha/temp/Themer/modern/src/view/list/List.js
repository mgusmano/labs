Ext.define('Viewer.view.list.List', {
    extend: 'Ext.Panel',
    xtype: 'c-preview-list',
    requires: ['Ext.dataview.List'],

    config: {
        layout: 'fit'
    },

    initialize: function() {
        var me = this,
            store = Ext.create('Viewer.store.StatesStore');

        this.setItems([{
            docked: 'top',
            xtype: 'toolbar',
            items: [{
                xtype: 'button',
                text: 'Empty List',
                handler: function (btn) {
                    if (me.filtered) {
                        btn.setText('Empty List');
                        me.filtered = false;
                        store.clearFilter();
                    } else {
                        btn.setText('Restore List');
                        me.filtered = true;
                        store.filterBy(function() { return false; })
                    }
                }
            }]
        }, {
            xtype: 'list',
            store: store,
            itemTpl: '{description}',
            indexBar: true,
            grouped: true,
            title: 'List',
            pinHeaders: true,
            emptyText: 'This list is empty',
            striped: true,
            onItemDisclosure: function(record, btn, index) {
                Ext.Msg.alert(record.get('description'), record.get('country'), Ext.emptyFn);
            }
        }]);

        this.callParent(arguments);
    }
});

