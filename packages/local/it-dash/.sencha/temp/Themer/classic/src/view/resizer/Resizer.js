Ext.define('Viewer.view.resizer.Resizer', {
	extend: 'Ext.Container', 
	xtype: 'c-preview-resizer',
    
    requires: [
        'Ext.panel.Panel',
        'Viewer.DummyText'
    ],

    items: [{
        xtype: 'panel',
        width: 450,
        height: 200,
        bodyPadding: 10,
        html: Viewer.DummyText.mediumText,
        margin: '0 0 10 0',
        resizable: {
            pinned: true,
            dynamic: true
        }
    }]
});