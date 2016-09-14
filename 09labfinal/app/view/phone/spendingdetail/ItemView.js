Ext.define('AppCamp.view.phone.spendingdetail.ItemView',{
	extend: 'Ext.Panel',
	xtype: 'itemview',

	//bodyPadding: '0 20 20 20',

	// config: {
	// 		store: null
	// },

	items: [
		{ xtype: 'container', html: 'hi' },
		{
			xtype: 'dataview',
			scrollable: false,

			// listeners: {
			// 		itemtap: 'onItemTap'
			// },
			tpl: 'xx<div class="faq-item">' +
							'<div class="faq-title">' +
									'<div class="faq-expander x-fa"></div>' +
									'<div class="faq-question">{agencyCode}</div>' +
							'</div>' +
							'<div class="faq-body">' +
									'<div>{agencyName}</div>' +
							'</div>' +
					'</div>'
	}
	],

	updateStore: function (store) {
			var grid = this.down('dataview');
			grid.setStore(store);
	}

});
