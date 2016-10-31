/**
 * This example shows how to create a slider
 */
Ext.define('Viewer.view.form.Slider', {
    extend : 'Ext.form.Panel',
    bodyPadding: '20 20 10 20',
    xtype: 'c-preview-form-slider',

    requires: [
        'Ext.slider.Single'
    ],

    items: [{
        xtype: 'slider',
        width: 400,
        value: 50,
        tipText: function(thumb){
            return String(thumb.value) + '%';
        }
    }]
});