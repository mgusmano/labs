/**
 * Created by mbrocato on 5/10/16.
 */
Ext.define('Viewer.view.link.Link', {
    extend: 'Ext.panel.Panel',

    xtype: 'c-preview-link',

    bodyPadding: 10,

    html:   '<div style="margin-bottom: 5px;">Here is a link with <a href="javascript:void(0)">short text</a>.</div>' +
            '<div style="margin-bottom: 5px;"><a href="javascript:void(0)">Here is a link with long text.</a></div>' +
            '<div style="margin-bottom: 5px;"><a style="font-weight: bold" href="javascript:void(0)">A Link With Bold Text as Might Appear in a Headline</a></div>' +
            '<div style="margin-bottom: 5px;"><a class="x-sencha-themer-visited" href="javascript:void(0)">A visited link</a></div>'
});