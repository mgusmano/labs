Ext.define('Viewer.view.form.DisplayField', {
    extend : 'Ext.form.Panel',
    xtype : 'c-preview-form-display-field',

    requires: [
        'Ext.form.field.Display'
    ],

    bodyPadding: '20 20 10 20',
    
    items : {
        xtype : 'displayfield',
        value : 'value'
    }
});