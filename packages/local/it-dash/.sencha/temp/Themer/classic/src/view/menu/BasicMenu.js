Ext.define('Viewer.view.menu.BasicMenu', {
    extend : 'Ext.menu.Menu',
    xtype: 'c-preview-basic-menu',
    floating : false,
    width : 180,
    margin: '0 0 10 0',
    showSeparator : true,
    items: [{
        text: 'Where is my cloud?',
        iconCls : 'x-fa fa-cloud'
    },{
        text: 'Download',
        iconCls : 'x-fa fa-cloud-download'
    },{
        text: 'Upload',
        iconCls : 'x-fa fa-cloud-upload'
    },{
        xtype : 'menucheckitem',
        text : 'I love clouds!'
    }]
});