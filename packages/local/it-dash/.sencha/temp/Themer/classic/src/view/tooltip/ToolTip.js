Ext.define('Viewer.view.tooltip.ToolTip', {
    extend : 'Ext.panel.Panel',

    requires: [
        'Ext.layout.container.Center',
        'Ext.panel.Panel',
        'Ext.tip.ToolTip'
    ],

    xtype: 'c-preview-tooltip',

    layout: 'center',

    items: {
        xtype: 'panel',
        listeners: {
            afterlayout: function(target) {
                if (!this.tooltip) {
                    var tooltip = this.tooltip = Ext.create({
                        xtype: 'tooltip',
                        html: 'This is a tooltip <a href="#">with a link</a>.',
                        title: 'Title',
                        tools: [{
                            type: 'refresh'
                        }, {
                            type: 'help'
                        }, {
                            type: 'close'
                        }],
                        closable: false,
                        listeners: {
                            beforehide: function() {
                                return false;
                            },
                            afterlayout: function() {
                                tooltip.setXY([ target.getX() - tooltip.getWidth() / 2, target.getY() ]);
                            }
                        }
                    });

                    tooltip.show(target.getEl());
                } else {
                    this.tooltip.updateLayout();
                }
            },

            destroy: function() {
                this.tooltip.destroy()
            }
        }
    }
});