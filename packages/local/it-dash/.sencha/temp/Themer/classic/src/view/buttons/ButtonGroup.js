Ext.define('Viewer.view.buttons.ButtonGroup', {
    extend : 'Ext.panel.Panel',
    xtype: 'c-preview-button-group',

    requires: [
        'Ext.container.ButtonGroup',
        'Ext.layout.container.HBox'
    ],

    bodyPadding: 20,

    layout: 'hbox',

    items: [{
        xtype: 'buttongroup',
        frame : false,
        columns: 3,
        title: 'No Frame',
        items: [{
            text: 'Button 1'
        }, {
            text: 'Button 2'
        }, {
            text: 'Button 3'
        }]
    }, {
        xtype: 'buttongroup',
        frame : true,
        columns: 3,
        title: 'Frame',
        margin: '0 20',
        items: [{
            text: 'Button 1'
        }, {
            text: 'Button 2'
        }, {
            text: 'Button 3'
        }]
    }]
});