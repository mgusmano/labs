/**
 * Creates an outline around a specific element
 */
Ext.define('Viewer.view.Highlighter', {
    extend: 'Ext.Component',
    xtype: 'c-highlighter',

    privates: {
        /**
         * @property {Ext.Element}
         * The element being highlighted
         */
        target: undefined,

        /**
         * A ployfill for Ext.Component#setXY, which doesn't exist in the modern toolkit
         * @param {Array} xy
         */
        setXYModernPolyfill: function(xy) {
            this.setLeft(xy[0]);
            this.setTop(xy[1]);
        }
    },

    constructor: function() {
        this.callParent(arguments);

        Ext.applyIf(this, {
            /**
             * @config {String}
             * "hover" or "selected"
             */
            type: 'hover'
        });

        var cls = 'c-highlighter-' + this.type,
            cfg = { xtype: 'component', floating: true, shadow: false, renderTo: Ext.getBody(), cls: cls, hidden: true, top: 0, left: 0 };

        this.topEl      = Ext.create(Ext.apply({}, cfg, { style: 'height: 2px;' }));
        this.bottomEl   = Ext.create(Ext.apply({}, cfg, { style: 'height: 2px;' }));
        this.leftEl     = Ext.create(Ext.apply({}, cfg, { style: 'width:  2px;' }));
        this.rightEl    = Ext.create(Ext.apply({}, cfg, { style: 'width:  2px;' }));

        // polyfill Ext.Component#setXY in the modern toolkit
        if (!this.topEl.setXY) this.topEl.setXY = this.bottomEl.setXY = this.leftEl.setXY = this.rightEl.setXY = this.setXYModernPolyfill;
    },
    
    hide: function() {
        this.topEl.hide();
        this.bottomEl.hide();
        this.leftEl.hide();
        this.rightEl.hide();
    },
    
    show: function() {
        this.topEl.show();
        this.bottomEl.show();
        this.leftEl.show();
        this.rightEl.show();
    },

    /**
     * Highlights a specific element
     * @param {HTMLElement} [target] The element to highlight.  If null the highlighter will be hidden.
     */
    highlight: function(target) {
        this.target = target;

        if (!target) {
            this.hide();
            return;
        }

        this.show();

        var target = Ext.fly(target),
            xy = target.getXY();

        this.topEl.setXY([xy[0] - 4, xy[1] - 4]);
        this.topEl.setWidth(target.getWidth() + 8);

        this.bottomEl.setXY([xy[0] - 4, xy[1] + target.getHeight() + 2]);
        this.bottomEl.setWidth(target.getWidth() + 8);

        this.leftEl.setXY([xy[0] - 4, xy[1] - 4]);
        this.leftEl.setHeight(target.getHeight() + 8);
        
        this.rightEl.setXY([xy[0] + target.getWidth() + 2, xy[1] - 4]);
        this.rightEl.setHeight(target.getHeight() + 8);
    },

    /**
     * Ensures that the highlight elements surround the current target.  This is useful when the target element may have
     * shifted or been resized due to a style change
     */
    reHighlight: function() {
        this.highlight(this.target);
    }
});