Ext.define('AppCamp.view.main.WelcomeView',{
	extend: 'Ext.Component',
	xtype: 'welcomeview',
	reference: 'welcomeview',
	cls: 'welcomeview',
	
	bind: { data: { firstName: '{firstName}', lastName: '{lastName}', navCollapsed: '{navCollapsed}' } },
	tpl: '' +
		'<tpl if="navCollapsed == false">' +
			'<div class="profile">' +
			'	<div class="profile_pic">' +
			'		<img src="resources/app/users/{firstName}{lastName}.jpeg" alt="..." class="img-circle profile_img">' +
			'	</div>' +
			'	<div class="profile_info">' +
			'		<span>Welcome,</span>' +
			'		<h2>{firstName} {lastName}</h2>' +
			'	</div>' +
			'</div>' +  
		'</tpl>' +
		'<tpl if="navCollapsed == true">' +
			'<img src="resources/app/users/{firstName}{lastName}.jpeg" style="border-radius: 50%;height:40px;margin:5px;border: 1px solid white">' +
		'</tpl>'
});
