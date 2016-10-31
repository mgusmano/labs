Ext.define('Viewer.overrides.dom.Element', {
    override: 'Ext.dom.Element',

    inheritableStatics: {
        getViewportScale: function() {
            return ((Ext.isiOS || Ext.isAndroid) ? 1 : (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI)) * this.getViewportTouchScale();
        }
    }
});