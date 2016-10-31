Ext.define('Viewer.view.Progress', {
    extend : 'Ext.Panel',
    xtype : 'c-preview-progress',
    
    requires: [
        'Ext.Progress'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    bodyPadding: 20,
    
    items: [{
        xtype: 'panel',
        listeners: [{
            painted: function (target) {
                var value = 0,
                    step = 5;
                this.progressEnabled = true;
                this.progress = Ext.create(Ext.Progress, {
                    text: value + "% Complete",
                    value: value,
                    width: 330,
                    style: 'position: absolute'
                });
                
                this.progress.renderTo(target);
                
                var updateProgress = function() {
                    if (!this.progressEnabled) return;
                    value = value + step;
                    if (value > 100) value = 0;
                    this.progress.updateValue(value/100, (value-step)/100);
                    this.progress.updateText(value + "% Complete");
                    Ext.Function.defer(updateProgress, 500, this);
                }
                
                Ext.Function.defer(updateProgress, 500, this);
            },

            destroy: function() {
                this.progressEnabled = false;
                this.progress.destroy();
            }
        }]
    }]
});