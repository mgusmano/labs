Ext.define('Viewer.view.form.TextField', {
    extend : 'Ext.form.Panel',
    bodyPadding: '20 20 10 20',
    xtype : 'c-preview-form-text-field',

    requires: [
        'Ext.form.field.Text',
        'Ext.form.field.TextArea'
    ],

    defaults: {
        labelAlign: 'right',
        labelWidth: 100,
        msgTarget : 'under'
    },

    items: [{
        xtype: 'textfield',
        fieldLabel : 'Text Field',
        vtype : 'email',
        qtip: 'Enter an invalid email address to adjust invalid styles',
        emptyText : 'user@domain.com'
    }, {
        xtype: 'textarea',
        fieldLabel : 'Text Area',
        emptyText: 'Text goes here...'
    }]
});