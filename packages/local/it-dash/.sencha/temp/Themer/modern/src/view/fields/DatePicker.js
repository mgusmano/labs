Ext.define('Viewer.view.fields.DatePicker', {
    extend : 'Ext.form.Panel',
    xtype : 'c-preview-fields-date',
    
    requires: [
        'Ext.field.DatePicker'
    ] ,
    
    defaults: {
        labelAlign: 'left',
        labelWidth: 100
    },

    bodyPadding: 10,

    items: [{
        xtype: 'datepickerfield',
        value: new Date(),
        label : 'Date'
    }]
});