Ext.define('Viewer.view.fields.FieldSet', {
    extend: 'Ext.Panel',
    xtype: 'c-preview-fieldset',
    
    requires: [
        'Ext.field.Checkbox',
        'Ext.field.Spinner',
        'Ext.field.Text',
        'Ext.form.FieldSet'
    ],

    bodyPadding: 10,

    items: [{
        xtype: 'fieldset',
        title: 'Title',
        instructions: 'Instructions',
        
        defaults: {
            labelWidth: 100
        },
        
        items: [{
            xtype: 'textfield',
            label: 'Text'
        },
        {
            xtype: 'checkboxfield',
            label : 'Checkbox'
        }, 
        {
            xtype: 'spinnerfield',
            label: 'Spinner',
            minValue: 0,
            maxValue: 100,
            stepValue: 1
        }]
    }]
});