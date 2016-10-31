Ext.define('Viewer.view.ToolTip', {
    extend : 'Ext.Panel',

    requires: [
        'Ext.Panel',
        'Ext.tip.ToolTip'
    ],

    xtype: 'c-preview-tooltip',
    padding: 20,
    layout: 'fit',

    listeners: [{
        painted: function(target) {
            var tooltip = this.tooltip = Ext.create('Ext.tip.ToolTip', {
                html: 'This is a tooltip.',
                title: 'Title',
                tools: [{
                    type: 'refresh'
                }, {
                    type: 'help'
                }, {
                    type: 'close'
                }],
                closable: false,
                dismissDelay: 0,
                showDelay: 0,
                hideDelay: 0,
                width: 200,

                listeners: {
                    beforehiddenchange: function(tooltip, hidden) {
                        return !hidden;  
                    },
                    painted: function(target) {
                        tooltip.element.setXY([ target.getX() - tooltip.element.getWidth() / 2, 20 ]);
                    }
                }
            });
            
            tooltip.showBy(target);
        },
        destroy: function() {
            this.tooltip.destroy()
        }
    }]
});