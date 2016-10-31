/**
 * Creates a basic window.
 */
Ext.define('Viewer.view.window.BasicWindow', {
    extend: 'Ext.window.Window',
    xtype: 'c-preview-basic-window',
    requires : [
        'Ext.window.Window'
    ],
    height: 300,
    width: 400,
    title: 'Window',
    scrollable: true,
    bodyPadding: 10,
    html: Viewer.DummyText.mediumText,
    constrain: true,
    closable: false,
    hidden : false,
    floating : false,
    iconCls : 'fa fa-binoculars',
    tools : [{
        type : 'close'
    }],
    bbar : [{
        text : 'Message Box',
        handler : function () {
            Ext.Msg.show({
                title : 'Alert!',
                message : 'Hi! I am just an alert!',
                buttons : Ext.Msg.YESNO,
                icon : Ext.Msg.INFO
            })
        }
    }]
});