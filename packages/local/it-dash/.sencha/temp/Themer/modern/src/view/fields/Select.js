Ext.define('Viewer.view.fields.Select', {
    extend: 'Ext.form.Panel',
    xtype: 'c-preview-selectfield',

    requires: [
        'Ext.field.Select'
    ],

    bodyPadding: 10,

    items: [{
        xtype: 'selectfield',
        label: 'Select',
        options: [{
            text: 'First Option',
            value: 'first'
        }, 
        {
            text: 'Second Option',
            value: 'second'
        }, 
        {
            text: 'Third Option',
            value: 'third'
        }]
    }]
});