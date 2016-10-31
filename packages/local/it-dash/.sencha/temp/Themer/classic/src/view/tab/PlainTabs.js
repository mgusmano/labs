Ext.define('Viewer.view.tab.PlainTabs', {
    extend : 'Ext.tab.Panel',
    xtype: 'c-preview-plain-tabs',
    requires: [
        'Ext.tab.Panel',
        'Viewer.DummyText'
    ],

    defaults: {
        width: 475,
        height: 200,
        bodyPadding: 10,
        html: Viewer.DummyText.mediumText
    },
    plain: true,
    items: [{
        title : 'Just Text'
    }, {
        title : 'Icon Tab',
        glyph : 'xf087@FontAwesome'
    }, {
        title : 'Closable Tab',
        closable: true
    },  {
        title : 'Disabled Tab',
        disabled : true,
        glyph : 'xf013@FontAwesome'
    }]
});