
Ext.define('AppCamp.view.kinvey.KinveyView',{
	extend: 'BaseContainer',
	xtype: 'kinvey-kinveyview',
	layout: 'vbox',

	initialize : function() {

	Kinvey.init({
		appKey: 'kid_BJu93mN3',
		appSecret: 'cdd8135ab35e416aaa0af454cce30efb'
	});

var books = Kinvey.DataStore.collection('books');
//save(books);
var me = this;
getAll(books)
.then(function(response) {
//	debugger;
	me.allBooks = response;
	Ext.getCmp('theList').setData(response);
}, function(e) {
console.log(e);
});
//debugger;


function save(books) {
	var promise = books.save({
		name: 'book03'
	}).then(function onSuccess(entity) {
		// ...
	}).catch(function onError(error) {
		// ...
	});
};

function getAll(dataStore) {
	return new Ext.Promise(function (resolve, reject) {
		var stream = dataStore.find();
		var theData;
		stream.subscribe(function onNext(entities) {
			console.log(entities);
			theData = entities;
		}, function onError(error) {
			console.log('error');
		}, function onComplete() {
			console.log('complete');
			resolve(theData);
		});
	});
};

	// getServerData: function () {
	// 	return new Ext.Promise(function (resolve, reject) {
	// 		try {
	// 			Ext.Ajax.request({
	// 				url: 'resources/app/data/menu.' + localStorage.getItem("role") + '.json',
	// 				success: function(response, opts) {
	// 					var menuData = Ext.decode(response.responseText);
	// 					resolve({ menuData: menuData });
	// 				},
	// 				failure: function(response, opts) {
	// 					return reject ('server-side failure with status code ' + response.status);
	// 				}
	// 			});
	// 		}
	// 		catch(err) {
	// 			return reject(err);
	// 		}
	// 	});
	// },





//logon();
//activeUser();

function logon() {
//	alert('hi');
	var promise = Kinvey.User.login({
		username: 'mgusmano',
		password: 'mgusmano'
	}).then(function onSuccess(user) {
		console.log(user);
	}).catch(function onError(error) {
		console.log(error);
	});




};


// 	var promise = Kinvey.ping().then(function(response) {
// 		console.log('Kinvey Ping Success. Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey);
// 	}).catch(function(error) {
// 		console.log('Kinvey Ping Failed. Response: ' + error.description);
// 	});


// 	var promise = Kinvey.User.login({
// 		username: 'username',
// 		password: 'password'
// 	}).then(function onSuccess(user) {
// 	// ...
// 	}).catch(function onError(error) {
// 	// ...
// 	});


function activeUser() {
	var promise = new Kinvey.Promise(function(resolve) {
		resolve(Kinvey.User.getActiveUser());
	});
	promise = promise.then(function onSuccess(user) {
		if (user) {
			return user.me();
		}
		return user;
	}).then(function onSuccess(user) {
		debugger;
		// ...
	}).catch(function onError(error) {
		debugger;
		// ...
	});
}

// var user = new Kinvey.User();
// var promise = user.signup({
//   username: 'mgusmano',
//   password: 'mgusmano'
// }).then(function onSuccess(user) {
//   // ...
// }).catch(function onError(error) {
//   // ...
// });






		this.callParent();
	},

	items: [
		{
			xtype: 'list',
			id: 'theList',
			margin: 10, shadow: true,
			itemTpl: '<div class="contact">{name}</div>',
			// grouped: true,
			// store: {
			// 	fields: ['name'],
			// 	data: [
			// 		{ name: 'Michael Scott', seniority: 7, department: 'Management' },
			// 		{ name: 'Dwight Schrute', seniority: 2, department: 'Sales' },
			// 		{ name: 'Jim Halpert', seniority: 3, department: 'Sales' },
			// 		{ name: 'Kevin Malone', seniority: 4, department: 'Accounting' },
			// 		{ name: 'Angela Martin', seniority: 5, department: 'Accounting' }
			// 	]
			// }
		}
	]
});
