(function() {
    var menu = [{
        glyph : 'xf0ed@FontAwesome',
        text:'Download'
    }, {
        glyph : 'xf0ee@FontAwesome',
        text:'Upload'
    }, {
        glyph : 'xf0c2@FontAwesome',
        text:'Now make it rain, will ya?'
    }];

    /**
     * This example shows how to create a split button. Default button scales to "small".
     */
    Ext.define('Viewer.view.buttons.SplitButtons', {
        extend: 'Ext.Container',
        xtype: 'c-preview-split-buttons',

        requires: [
            'Ext.button.Split',
            'Ext.container.Container',
            'Ext.layout.container.Table'
        ],

        defaults: {
            xtype: 'container',
            margin: '0 0 20 0'
        },

        layout: {
            type: 'table',
            trAttrs: {
                style: 'vertical-align: top'
            },
            columns: 2
        },

        defaults : {
            xtype : 'splitbutton',
            margin : '0 20 20 0',
            menu: menu
        },

        items: [
            { scale: 'small',   text: 'Small'   },
            { scale: 'small',   text: 'Small',  arrowAlign: 'bottom' },
            { scale: 'medium',  text: 'Medium'  },
            { scale: 'medium',  text: 'Medium', arrowAlign: 'bottom' },
            { scale: 'large',   text: 'Large'   },
            { scale: 'large',   text: 'Large',  arrowAlign: 'bottom' }
        ]
    });
})();
