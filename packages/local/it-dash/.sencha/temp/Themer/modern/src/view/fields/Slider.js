Ext.define('Viewer.view.fields.Slider', {
    extend: 'Ext.form.Panel',
    xtype: 'c-preview-sliderfield',
    
    requires: [
        'Ext.field.Slider'
    ],

    bodyPadding: 10,

    items: [{
        xtype: 'sliderfield',
        label: 'Enabled',
        minValue: 0,
        value: 50,
        maxValue: 100
    }, {
        xtype: 'sliderfield',
        label: 'Disabled',
        disabled: true,
        minValue: 0,
        value: 50,
        maxValue: 100
    }]
});