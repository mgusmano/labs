/**
 * This example shows how to create a number field.
 */
Ext.define('Viewer.view.form.Number', {
    extend : 'Ext.form.Panel',
    bodyPadding: '20 20 10 20',
    xtype: 'c-preview-form-numberfield',

    requires: [
        'Ext.form.field.Number'
    ],

    items: [{
        value : 1,
        xtype: 'numberfield'
    }]
});