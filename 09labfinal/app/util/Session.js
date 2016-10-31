Ext.define('AppCamp.util.Session', {
	singleton: true,
	alternateClassName: ['Session'],

	editing: false,

	//in a real application this would be a server call
	getRole: function(username) {
		var role;
		switch(username) {
			case 'barack.obama':
				role = 'president';
				break;
			case 'donald.trump':
				role = 'candidate';
				break;
			case 'hillary.clinton':
				role = 'candidate';
				break;
			default:
				role = 'notauthorized';
				break;
		}
		return role;
	},

	setUser: function(username) {
		switch(username) {
			case 'donald.trump':
				State.set('firstname', 'Donald');
				State.set('lastname', 'Trump');
			break;
			case 'hillary.clinton':
				State.set('firstname', 'Hillary');
				State.set('lastname', 'Clinton');
			break;
			default:
				State.set('firstname', 'Barack');
				State.set('lastname', 'Obama');
			break;
		};
	},

	login: function(username, password) {
		var me = this;
		return new Ext.Promise(function (resolve, reject) {
			var role = me.getRole(username);
			if (role == 'notauthorized') {
				return reject('notauthorized');
			}
			State.set('loggedin', true);
			State.set('role', role);
			State.set('username', username);
//			State.set('password', password);
			me.setUser(username);
			resolve(username);




		});
	},

	logout: function(view) {
		State.clear("loggedin")
		State.clear("role")
		State.clear("username");
//		State.clear("password");
		State.clear("firstname");
		State.clear("lastname");
		//view.destroy();
		//AppCamp.getApplication().launch();
	}

});
