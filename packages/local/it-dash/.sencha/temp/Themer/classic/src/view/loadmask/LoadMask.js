Ext.define('Viewer.view.loadmask.LoadMask', {
    extend : 'Ext.container.Container',
    xtype : 'c-preview-loadmask',
    width : 120,
    height : 100,
    reference : 'maskContainer',
    listeners : {
        afterrender : function (cmp) {
            var myMask = new Ext.LoadMask({
                msg    : 'Please wait...',
                target : cmp,
                id : 'waitMask'
            });

            myMask.show();
        }
    }
});