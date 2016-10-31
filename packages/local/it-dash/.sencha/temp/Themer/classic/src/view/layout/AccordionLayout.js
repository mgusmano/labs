Ext.define('Viewer.view.layout.AccordionLayout', {
    extend : 'Ext.panel.Panel',
    xtype : 'c-preview-accordion-layout',

    requires: [
        'Ext.layout.container.Accordion'
    ],

    width : 300,
    height : 320,
    defaults : {
        bodyStyle : 'padding:15px'
    },
    layout: {
        // layout-specific configs go here
        type: 'accordion',
        titleCollapse: false,
        animate: true
    },
    items: [{
        title: 'Panel 1',
        html: 'Panel body'
    },{
        title: 'Panel 2',
        html: 'Panel body'
    },{
        title: 'Panel 3',
        html: 'Panel body'
    }]
});