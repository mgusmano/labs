Ext.define('Viewer.view.fields.Radio', {
    extend : 'Ext.form.Panel',
    xtype : 'c-preview-fields-radio',

    requires: [
        'Ext.field.Radio'
    ],

    layout: 'vbox',

    defaults: {
        labelAlign: 'left',
        labelWidth: 100
    },

    bodyPadding: 10,

    items: [{
        xtype: 'radiofield',
        label : 'Checked',
        checked: true,
        name: 'radio'
    },  {
        xtype: 'radiofield',
        label : 'Unchecked',
        name: 'radio'
    }]

});