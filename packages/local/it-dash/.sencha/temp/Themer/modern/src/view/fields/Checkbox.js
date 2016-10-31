Ext.define('Viewer.view.fields.Checkbox', {
    extend : 'Ext.form.Panel',
    xtype : 'c-preview-fields-checkbox',

    requires: [
        'Ext.layout.VBox'
    ],

    layout: 'vbox',

    defaults: {
        labelAlign: 'left',
        labelWidth: 100
    },

    bodyPadding: 10,

    items: [{
        xtype: 'checkboxfield',
        checked: true,
        label : 'Checked'
    }, {
        xtype: 'checkboxfield',
        label : 'Unchecked'
    }]
});