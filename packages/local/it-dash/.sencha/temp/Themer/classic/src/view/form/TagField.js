/**
 * This example shows how to create a tag field.
 */
Ext.define('Viewer.view.form.TagField', {
    extend : 'Ext.form.Panel',
    bodyPadding: '20 20 10 20',
    xtype: 'c-preview-form-tagfield',

    requires: [
        'Ext.form.field.Tag'
    ],

    items: {
        xtype: 'tagfield',
        store: {
            type: 'states'
        },
        width: 400,
        value: ['CA'],
        reference: 'states',
        displayField: 'state',
        valueField: 'state',
        filterPickList: true,
        queryMode: 'local'
    }
});