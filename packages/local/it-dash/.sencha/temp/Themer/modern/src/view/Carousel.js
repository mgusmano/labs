Ext.define('Viewer.view.Carousel', {
    extend: 'Ext.carousel.Carousel',
    xtype: 'c-preview-carousel',


    items: [
        {
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            items: {
                html : 'Item 1'
            }
        },
        {
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            items: {
                html : 'Item 2'
            }
        },
        {
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            items: {
                html : 'Item 3'
            }
        }
    ]
});