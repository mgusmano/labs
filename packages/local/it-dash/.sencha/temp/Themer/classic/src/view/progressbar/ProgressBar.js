Ext.define('Viewer.view.progressbar.ProgressBar', {
    extend : 'Ext.Container',
    xtype : 'c-preview-progressbar',
    html : '<div id="progress-div"></div>',
    items : [
        {
            xtype : 'progressbar',
            renderTo : Ext.get('progress-div'),
            width : 300,
            listeners : {
                render : function (pb) {
                    pb.wait({
                        interval : 500,
                        increment : 15,
                        text : 'Updating...',
                        scope : pb
                    })
                }
            }
        }
    ]
});