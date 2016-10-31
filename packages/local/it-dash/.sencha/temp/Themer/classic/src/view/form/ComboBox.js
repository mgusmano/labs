/**
 * This example shows how to create a combo box.
 */
Ext.define('Viewer.view.form.ComboBox', {
    extend : 'Ext.form.Panel',
    bodyPadding: '20 20 10 20',
    xtype: 'c-preview-form-combobox',

    requires: [
        'Ext.form.field.ComboBox'
    ],

    items: [{
        xtype: 'combo',
        displayField: 'state',
        store: {
            type: 'states'
        },
        emptyText: 'Select a state...',
        queryMode: 'local',
        typeAhead: true
    }]
});