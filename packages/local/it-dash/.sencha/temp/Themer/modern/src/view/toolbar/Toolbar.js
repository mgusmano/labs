Ext.define('Viewer.view.toolbar.Toolbar', {
    extend: 'Ext.Panel',
    xtype: 'c-preview-toolbar',

    config: {
        items: [{
            xtype: 'toolbar',
            title: 'Horizontal',
            docked: 'top',
            
            items: [{
                text: 'One',
                ui: 'action'
            }, {
                text: 'Two',
                ui: 'action'
            }, {
                xtype: 'spacer'
            }, {
  	        	text: 'Forward',
                ui: 'forward'
            }]
        }, {
            xtype: 'toolbar',
            title: 'Vertical',
            docked: 'left',

            items: [{
                text: 'One',
                ui: 'action'
            }, {
                text: 'Two',
                ui: 'action'
            }, {
                xtype: 'spacer'
            }, {
                text: 'Forward',
                ui: 'forward'
            }]
        }]
    }
});