Ext.define('Viewer.view.fields.Spinner', {
    extend: 'Ext.form.Panel',
    xtype: 'c-preview-spinnerfield',
    
    requires: [
        'Ext.field.Spinner'
    ],

    bodyPadding: 10,

    items: [{
        xtype: 'spinnerfield',
        label: 'Spinner',
        minValue: 0,
        maxValue: 100,
        stepValue: 1
    }]
});