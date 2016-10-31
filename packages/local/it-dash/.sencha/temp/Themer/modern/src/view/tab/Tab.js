Ext.define('Viewer.view.tab.Tab', {
    extend: 'Ext.tab.Panel',
    xtype: 'c-preview-tabpanel',

    config: {
        activeTab: 0,
        tabBar: {
            layout: {
                pack : 'center',
                align: 'center'
            },
            docked: 'bottom',
            defaults: {
                iconAlign: 'top'
            }
        },
        defaults: {
            scrollable: true
        },
        items: [
            {
                title: 'Plain Tab',
                padding: 10,
                cls: 'card',
                html: Viewer.DummyText.mediumText,
                iconCls: 'x-fa fa-info-circle'
            },
            {
                title: 'With Badge',
                padding: 10,
                html: Viewer.DummyText.mediumText,
                cls: 'card',
                iconCls: 'x-fa fa-star',
                badgeText: '4'
            },
            {
                title: 'Disabled',
                padding: 10,
                html: 'Disabled',
                cls: 'card',
                iconCls: 'x-fa fa-lock',
                disabled: true
            }
        ]
    }
});