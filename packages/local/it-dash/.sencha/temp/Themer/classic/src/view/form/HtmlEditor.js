Ext.define('Viewer.view.form.HtmlEditor', {
    extend : 'Ext.panel.Panel',
    bodyPadding: 10,
    xtype: 'c-preview-form-html-editor',
    requires : [
      'Ext.form.field.HtmlEditor'
    ],
    items: {
        xtype: 'htmleditor',
        width: 580,
        height: 250
    }
});