Ext.define('Viewer.view.panel.FormPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'c-preview-formpanel',

    requires: [
        'Ext.field.Text'
    ],

    require:[
        'Ext.field.Text',
        'Ext.field.Checkbox',
        'Ext.field.Spinner'    
    ],

    bodyPadding: 10,
    
    defaults: {
        labelWidth: 120
    },

    items: [{
        xtype: 'textfield',
        label: 'Field w/Value',
        value: 'value'
    }, {
        xtype: 'textfield',
        label: 'Empty Field',
        placeHolder: 'placeholder'
    }, {
        xtype: 'textfield',
        disabled: true,
        value: 'disabled',
        label: 'Disabled'
    }, {
        xtype: 'textfield',
        required: true,
        label: 'Required'
    }, {
        xtype: 'textfield',
        required: true,
        label: 'Invalid',
        value: 'invalid',
        component: {
            pattern: 'valid'
        }
    }]
});