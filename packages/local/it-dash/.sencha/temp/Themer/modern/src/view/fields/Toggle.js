Ext.define('Viewer.view.fields.Toggle', {
    extend: 'Ext.form.Panel',
    xtype: 'c-preview-togglefield',

    requires: [
        'Ext.field.Toggle'
    ],

    bodyPadding: 10,

    items: [{
        xtype: 'togglefield',
        label: 'On',
        value: true,
        labelWidth: 100
    }, {
        xtype: 'togglefield',
        label: 'Off',
        labelWidth: 100
    }, {
        xtype: 'togglefield',
        label: 'Disabled',
        disabled: true,
        value: true,
        labelWidth: 100
    }]
});