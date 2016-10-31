/**
 * Created by mbrocato on 6/1/16.
 */
Ext.define('Viewer.view.panel.AnchoredPanel', {
    extend: 'Ext.Container',
    xtype: 'c-preview-anchored-panel',

    requires: [
        'Viewer.DummyText'
    ],

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    constructor: function(config) {
        var panel = Ext.create({
            xtype: 'panel',
            floated: true,
            title: 'Anchored Panel',
            height: 150,
            width: 250,
            anchor: true,
            html: Viewer.DummyText.shortText
        });

        config.items = [{
            xtype: 'button',
            text: 'Target',
            margin: 10,
            listeners: {
                painted: function(btn) {
                    panel.showBy(btn)
                },
                destroy: function() {
                    panel.destroy()
                }
            }
        }];

        this.callParent(arguments);
    }
});