/**
 * This example shows how to create a checkbox and radio group.
 */
Ext.define('Viewer.view.form.CheckboxRadio', {
    extend : 'Ext.form.Panel',
    bodyPadding: '20 20 10 20',
    xtype: 'c-preview-form-checkbox-radio',

    requires: [
        'Ext.container.Container',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Radio',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox'
    ],
    
    layout: 'vbox',
    items: [{
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            xtype: 'checkbox',
            margin: '0 10'
        },
        items: [{
            boxLabel: 'Checkbox'
        }]
    }, {
        xtype: 'container',
        layout: 'hbox',
        defaults: {
            xtype: 'radio',
            margin: '0 10'
        },
        items: [{
            checked: true,
            boxLabel: 'Radio 1',
            name: 'radio',
            inputValue: 'red'
        }, {
            boxLabel: 'Radio 2',
            name: 'radio',
            inputValue: 'blue'
        }]
    }]
});