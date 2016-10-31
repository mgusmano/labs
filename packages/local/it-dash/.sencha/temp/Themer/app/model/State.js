/**
 * Model for combo box store.
 */
Ext.define('Viewer.model.State', {
    extend: 'Ext.data.Model',

    fields: [
        'abbr',
        'state',
        'description',
        'country'
    ]
});