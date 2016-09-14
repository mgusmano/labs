Ext.define('AppCamp.manager.Session', {
	singleton: true,
	alternateClassName: ['Session'],

	init: function() {
		console.log('session.init')
		//return this.start(State.get('session.token'), State.get('session.user'));
		return this.start(State.get('username'), State.get('password'));
	},

	get: function(key, defaultValue) {
		return State.get(key);
	},

	set: function(key, value) {
		State.set(key, value);
	},

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

	//temp, should be handeled in Application.js
	setUser: function(username) {
		switch(username) {
			case 'donald.trump':
				Session.set('firstName', 'Donald');
				Session.set('lastName', 'Trump');
			break;
			case 'hillary.clinton':
				Session.set('firstName', 'Hillary');
				Session.set('lastName', 'Clinton');
			break;
			default:
				Session.set('firstName', 'Barack');
				Session.set('lastName', 'Obama');
			break;
		};
	},

	login: function(username, password) {
		console.log('App.manager.Session-login');
		var me = this;
		return new Ext.Promise(function (resolve, reject) {
			// var token = 'token';
			// var user = {"id":"21465bd7-d32d-4995-9609-4efc97859dfb","email":"jdixonz@skype.com","username":"joyce.dixon","firstname":"Joyce","lastname":"Dixon","title":"Media Manager II","phone":"30-(554)180-2830","extension":null,"skype":"jdixonz","linkedin":"joyce.dixon","picture":"/api/portraits/women/18.jpg","birthday":"1976-08-16","started":"2015-08-22","ended":null,"created":"2016-09-12T13:57:28.906Z","updated":"2016-09-12T13:57:38.117Z","office_id":"74190840-82d6-4c0c-9e3e-715c389fc66d","organization_id":"52c30f5d-c524-49e9-b952-3865fcb1e096","organization":{"id":"52c30f5d-c524-49e9-b952-3865fcb1e096","name":"Quality Asurance","created":"2016-09-12T13:57:28.783Z","updated":"2016-09-12T13:57:38.080Z","manager_id":"08fc5e06-4541-4cec-8d74-d9029a0e0724","headcount":23,"manager":{"id":"08fc5e06-4541-4cec-8d74-d9029a0e0724","email":"ewarren46@marketwatch.com","username":"evelyn.warren","firstname":"Evelyn","lastname":"Warren","title":"Senior Cost Accountant","phone":"55-(312)839-8782","extension":null,"skype":"ewarren46","linkedin":"evelyn.warren","picture":"/api/portraits/women/62.jpg","birthday":"1970-11-29","started":"2014-07-05","ended":null,"created":"2016-09-12T13:57:29.193Z","updated":"2016-09-12T13:57:38.134Z","office":{"location":{"latitude":47.16663,"longitude":-55.14829},"id":"96edb1c4-04fe-463b-b8d0-346226a7b60e","name":"Welch","address":"3 Corscot Drive","postcode":null,"region":"Newfoundland and Labrador","city":"Marystown","country":"Canada","created":"2016-09-12T13:57:28.764Z","updated":"2016-09-12T13:57:28.764Z"}}},"office":{"location":{"latitude":55.75378,"longitude":37.81885},"id":"74190840-82d6-4c0c-9e3e-715c389fc66d","name":"Lukken","address":"66855 Bashford Lane","postcode":null,"region":null,"city":"Novogireyevo","country":"Russia","created":"2016-09-12T13:57:28.764Z","updated":"2016-09-12T13:57:28.764Z","headcount":10}}

			// // if (!me.start(token, user)) {
			// // 		return reject('Failed to start session');
			// // }
			// debugger;
			// State.set('session.token', token);
			// State.set('session.user', user);

			var role = me.getRole(username);
			if (role == 'notauthorized') {
				return reject('notauthorized');
			}

			State.set('username', username);
			State.set('password', password);
			State.set('loggedin', true);
			State.set('role', role);

			setUser(username);

			resolve(me.user);
				
			// 	Ext.Msg.alert('<div style="color:red;font-size:24px;">NOT AUTHORIZED</div>', 
			// 		'<div>You are not authorized for the AppCamp Application</div>' + 
			// 		'<br><br>' +
			// 		'<div>Run for President</div>' +
			// 		'<div>or</div>' +
			// 		'<div>contact Sencha</div>' +
			// 		'' +
			// 		'', 
			// 		Ext.emptyFn);
			// }


        //         if (!success) {
        //             return reject(result.message);
        //         }




					// localStorage.setItem("role", this.getRole(values.username));
					// localStorage.setItem("LoggedIn", true);
					// localStorage.setItem("username", values.username);




			});
    },






	privates: {
		token: null,

		user: null,

		start: function(token, user) {
			debugger;
			if (!token || !user) {
					return false
			}
			var me = this;

			// // need to rely on the model proxy reader to have associations correctly resolved.
			// var me = this,
			// 		proxy = App.model.Person.getProxy(),
			// 		reader = proxy && proxy.getReader(),
			// 		data = Ext.clone(user);

			// if (reader) {
			// 		me.user = reader.readRecords([data]).records[0];
			// }
			// if (!me.user) {
			// 		me.user = Ext.create('App.model.Person', data);
			// }


			me.token = token;
			me.user = user;
			//me.fireEvent('start', me.token, me.user);
			return true;
		}
	}

});
