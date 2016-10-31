!function() {

var store = Ext.create('Viewer.store.GridStore');

/**
 * This example is used to reflect global SASS variable changes when applied via Base Editor form.
 */
Ext.define('Viewer.view.Base', {
    extend: 'Ext.panel.Panel',
    xtype: 'c-preview-global-base',

    requires: [
        'Ext.button.Button',
        'Ext.button.Segmented',
        'Ext.container.Container',
        'Ext.data.TreeStore',
        'Ext.form.RadioGroup',
        'Ext.form.field.Checkbox',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Number',
        'Ext.form.field.Text',
        'Ext.form.field.Display',
        'Ext.grid.Panel',
        'Ext.layout.container.Anchor',
        'Ext.layout.container.Border',
        'Ext.layout.container.HBox',
        'Ext.tab.Panel',
        'Ext.toolbar.Paging',
        'Ext.toolbar.Separator',
        'Ext.toolbar.Spacer',
        'Ext.tree.Panel'
    ],

    border: 1,

    layout: 'border',

    height: 575,
    width: 700,

    items: [{
        region: 'west',
        title: 'Tree',
        xtype: 'treepanel',
        animate: true,
        width: 150,
        split: true,
        collapsible: true,
        store: Ext.create('Ext.data.TreeStore', {
            root: {
                text : 'Simpsons',
                expanded : true,
                children : [
                    { text : 'Lisa', leaf : true },
                    { text : 'Bart', leaf : true },
                    { text : 'Homer', leaf : true },
                    { text : 'Marge', leaf : true }
                ]
            }
        })
    }, {
        region: 'center',
        xtype: 'tabpanel',
        items: [{
            title: 'Tab 1',
            glyph: 'xf0ce@FontAwesome',
            layout: {
                type: 'border'
            },
            items: [{
                xtype: 'grid',
                region: 'center',
                flex: 1,
                store: store,
                height: 450,
                columns: [
                    { text: 'Name', dataIndex: 'name', flex: 2 },
                    { text: 'Email', dataIndex: 'email', flex: 3 },
                    { text: 'Phone', dataIndex: 'phone', width: 130 }
                ],
                dockedItems: [{
                    xtype: 'toolbar',
                    items: [{
                        xtype: 'button',
                        text: 'Menu',
                        glyph: 'xf0c9@FontAwesome',
                        menu: [{
                            text: 'Option 1'
                        }, {
                            text: 'Option 2'
                        }]
                    }, {
                        xtype: 'tbseparator'
                    }, {
                        xtype: 'segmentedbutton',
                        items: [{
                            text: 'One',
                            enableToggle: true
                        }, {
                            text: 'Two',
                            enableToggle: true
                        }, {
                            text: 'Three',
                            enableToggle: true
                        }]
                    }, {
                        xtype: 'tbspacer',
                        flex: 1
                    }, {
                        xtype: 'textfield',
                        emptyText: 'Search...'
                    }]
                }, {
                    xtype: 'pagingtoolbar',
                    store: store,
                    dock: 'bottom'
                }]
            }, {
                flex: 1,
                region: 'south',
                split: true,
                collapsible: true,
                bodyPadding: 10,
                title: 'Form',
                layout: 'hbox',
                items: [{
                    xtype: 'container',
                    layout: 'anchor',
                    defaults: {
                        labelAlign: 'right',
                        labelWidth: 80
                    },
                    items: [{
                        xtype: 'textfield',
                        fieldLabel: 'Text Field',
                        value: 'Lorem Ipsum'
                    }, {
                        xtype: 'combo',
                        fieldLabel: 'Combo Box',
                        forceSelection: true,
                        value: 'Choice One',
                        editable: false,
                        store: ['Choice One', 'Choice Two', 'Choice Three']
                    }, {
                        xtype: 'datefield',
                        fieldLabel: 'Date',
                        value: new Date()
                    }, {
                        xtype: 'button',
                        margin: '0 0 0 85',
                        text: 'Button'
                    }]
                }, {
                    xtype: 'container',
                    layout: 'anchor',
                    defaults: {
                        labelAlign: 'right',
                        labelWidth: 80
                    },
                    items: [{
                        xtype: 'checkbox',
                        fieldLabel: 'Checkbox',
                        checked: true,
                        boxLabel: 'Enabled'
                    }, {
                        xtype: 'radiogroup',
                        fieldLabel: 'Radio',
                        items: [{
                            boxLabel: 'One',
                            checked: true,
                            margin: '0 10 0 0'
                        }, {
                            boxLabel: 'Two'
                        }]
                    }, {
                        xtype: 'numberfield',
                        fieldLabel: 'Number',
                        minValue: 0,
                        maxValue: 100,
                        step: 1,
                        value: 1,
                        allowDecimals: 0
                    }, {
                        xtype: 'displayfield',
                        fieldLabel: 'Link',
                        value: '<a href="#">This is a link</a>'
                    }]
                }]
            }]
        }, {
            title: 'Tab 2',
            bodyPadding: 10,
            html: 'Nothing to see here.'
        }, {
            title: 'Tab 3',
            bodyPadding: 10,
            html: 'Nothing to see here.'
        }]
    }]
});
}();
