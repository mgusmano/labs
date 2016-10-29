Ext.define('AppCamp.util.State', {
	singleton: true,
	alternateClassName: ['State'],
	requires: [
		'Ext.util.LocalStorage'
	],

	get: function(key, defaultValue) {
		var value = this.store.getItem(key);
		return value === undefined? defaultValue : this.decode(value);
	},

	set: function(key, value) {
		if (value == null) {    // !== undefined && !== null
			this.store.removeItem(key);
		} else {
			this.store.setItem(key, this.encode(value));
		}
	},

	clear: function(key) {
		this.set(key, null);
	},

	privates: {
		store: new Ext.util.LocalStorage({ id: 'appcamp-state' }),

		encode: function(value) {
			return JSON.stringify(value);
		},

		decode: function(value) {
			return JSON.parse(value);
		}
	}
});