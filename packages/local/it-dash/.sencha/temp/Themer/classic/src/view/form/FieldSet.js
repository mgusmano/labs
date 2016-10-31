Ext.define('Viewer.view.form.FieldSet', {
    extend : 'Ext.form.Panel',
    bodyPadding: '10 20 10 20',
    xtype : 'c-preview-form-fieldset',

    requires: [
        'Ext.form.FieldSet',
        'Ext.form.field.Text',
        'Ext.layout.container.Anchor',
        'Ext.layout.container.Fit'
    ],

    width : 500,
    layout : 'anchor',

    items: [{
        xtype:'fieldset',
        title: 'Fieldset',
        collapsible: true,
        layout: 'anchor',
        defaultType: 'textfield',
        defaults: { labelWidth: 60 },
        items: [{ 
            fieldLabel: 'Field 1' 
        }, {
            fieldLabel: 'Field 2'
        }]}, {
        xtype:'fieldset',
        title: 'With Checkboxes',
        collapsible: true,
        layout: 'column',
        defaultType: 'checkboxfield',
        defaults: { 
            labelWidth: 60, 
            columnWidth: 0.33 
        },
        items: [{
            fieldLabel: 'Option 1'
        }, {
            fieldLabel: 'Option 2'
        }, {
            fieldLabel: 'Option 3'
        }]
    }]
});