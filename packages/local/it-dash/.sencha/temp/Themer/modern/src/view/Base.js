!function() {

    var store = Ext.create('Viewer.store.GridStore');

    /**
     * This example is used to reflect global SASS variable changes when applied via Base Editor form.
     */
    Ext.define('Viewer.view.Base', {
        extend: 'Ext.tab.Panel',
        xtype: 'c-preview-global-base',

        requires: [
            'Ext.data.TreeStore',
            'Ext.dataview.NestedList',
            'Ext.field.DatePicker',
            'Ext.field.Select',
            'Ext.field.Slider',
            'Ext.field.Spinner',
            'Ext.field.Text',
            'Ext.field.Toggle',
            'Ext.form.Panel',
            'Ext.grid.Grid',
            'Ext.layout.VBox',
            'Ext.tab.Panel'
        ],

        fullscreen: true,

        tabBar: {
            layout: {
                pack: 'center',
                align: 'center'
            },
            docked: 'bottom',
            defaults: {
                iconAlign: 'top'
            }
        },

        items: [{
            title: 'Form',
            xtype: 'formpanel',
            iconCls: 'x-fa fa-edit',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            bodyPadding: 10,
            defaults: {
                labelWidth: 100
            },
            items: [{
                xtype: 'textfield',
                placeHolder: 'Enter text here...',
                label: 'Text'
            }, {
                label: 'Spinner',
                xtype: 'spinnerfield'
            }, {
                xtype: 'selectfield',
                label: 'Select',
                options: [
                    {text: 'Item 1'},
                    {text: 'Item 2'},
                    {text: 'Item 3'}
                ]
            }, {
                label: 'Date',
                value: new Date(),
                xtype: 'datepickerfield'
            }, {
                label: 'Slider',
                xtype: 'sliderfield'
            }, {
                label: 'Toggle',
                xtype: 'togglefield'
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    text: 'Normal',
                    flex: 1,
                    margin: '5'
                }, {
                    xtype: 'button',
                    text: 'Action',
                    flex: 1,
                    margin: '5',
                    ui: 'action'
                }]
            }, {
                xtype: 'panel',
                layout: 'hbox',
                items: [{
                    xtype: 'button',
                    text: 'Confirm',
                    flex: 1,
                    margin: '5',
                    ui: 'confirm'
                }, {
                    xtype: 'button',
                    text: 'Decline',
                    flex: 1,
                    margin: '5',
                    ui: 'decline'
                }]
            }]
        }, {
            xtype: 'nestedlist',
            title: 'List',
            iconCls: 'x-fa fa-list',
            store: Ext.create('Ext.data.TreeStore', {
                root: {
                    expanded: true,
                    children: [{
                        text: 'Home',
                        iconCls: 'x-fa fa-home',
                        children: [{
                            text: 'Messages',
                            iconCls: 'x-fa fa-inbox',
                            leaf: true
                        }, {
                            text: 'Archive',
                            iconCls: 'x-fa fa-database',
                            children: [{
                                text: 'First',
                                iconCls: 'x-fa fa-sliders',
                                leaf: true
                            }, {
                                text: 'No Icon',
                                iconCls: null,
                                leaf: true
                            }]
                        }, {
                            text: 'Music',
                            iconCls: 'x-fa fa-music',
                            leaf: true
                        }, {
                            text: 'Video',
                            iconCls: 'x-fa fa-film',
                            leaf: true
                        }]
                    }, {
                        text: 'Users',
                        iconCls: 'x-fa fa-user',
                        children: [{
                            text: 'Tagged',
                            iconCls: 'x-fa fa-tag',
                            leaf: true
                        }, {
                            text: 'Inactive',
                            iconCls: 'x-fa fa-trash',
                            leaf: true
                        }]
                    }, {
                        text: 'Groups',
                        iconCls: 'x-fa fa-group',
                        leaf: true
                    }, {
                        text: 'Settings',
                        iconCls: 'x-fa fa-wrench',
                        children: [{
                            text: 'Sharing',
                            iconCls: 'x-fa fa-share-alt',
                            leaf: true
                        }, {
                            text: 'Notifications',
                            iconCls: 'x-fa fa-flag',
                            leaf: true
                        }, {
                            text: 'Network',
                            iconCls: 'x-fa fa-signal',
                            leaf: true
                        }]
                    }]
                }
            })
        }, {
            xtype: 'grid',
            title: 'Grid',
            iconCls: 'x-fa fa-table',
            store: Ext.create('Viewer.store.GridStore'),
            columns: [
                {text: 'Name', dataIndex: 'name', flex: 1},
                {text: 'Email', dataIndex: 'email', flex: 2},
                {text: 'Phone', dataIndex: 'phone', flex: 1}
            ]
        }]
    });
}();
