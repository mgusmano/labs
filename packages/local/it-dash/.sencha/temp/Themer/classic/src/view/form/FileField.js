/**
 * This example shows how to create a file field.
 */
Ext.define('Viewer.view.form.FileField', {
    extend : 'Ext.form.Panel',
    bodyPadding: '20 20 20 20',
    xtype: 'c-preview-form-file-field',

    requires: [
        'Ext.form.field.File',
        'Ext.layout.container.Fit'
    ],

    width: 400,
    layout:'fit',
    items: {
        xtype: 'filefield'
    }
});