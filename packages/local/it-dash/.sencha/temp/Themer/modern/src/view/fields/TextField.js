Ext.define('Viewer.view.fields.TextField', {
    extend : 'Ext.Container',
    xtype : 'c-preview-fields-text',

    requires: [
        'Ext.field.Text',
        'Ext.field.TextArea',
        'Viewer.DummyText'
    ],

    padding: 10,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    defaults: {
        labelAlign: 'left',
        labelWidth: 100,
        clearIcon: true
    },

    bodyPadding: 10,

    items: [{
        xtype: 'textfield',
        label : 'Text',
        value: 'value'
    }, {
        xtype: 'textfield',
        label : 'Empty',
        placeHolder: 'placeholder'
    }, {
        xtype: 'textareafield',
        label : 'Text Area',
        placeHolder: 'enter long text...',
        flex: 1,
        value: Viewer.DummyText.mediumText
    }]
});