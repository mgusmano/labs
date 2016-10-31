Ext.define('AppCamp.view.main.Welcome',{
	extend: 'Ext.Component',
	xtype: 'app-welcome',
	cls: 'welcome',
	bind: { data: { firstname: '{firstname}', lastname: '{lastname}', navCollapsed: '{navCollapsed}' } },
	tpl: '' +
		'<tpl if="navCollapsed == false">' +
			'<div class="profile">' +
			'	<img class="img-circle" src="resources/app/users/{firstname}{lastname}.jpeg" alt="...">' +
			'	<div class="profile_info">' +
			'		<span>Welcome,</span>' +
			'		<b>{firstname} {lastname}</b>' +
			'	</div>' +
			'</div>' +  
		'</tpl>' +
		'<tpl if="navCollapsed == true">' +
			'<img class="profile_collapsed" src="resources/app/users/{firstname}{lastname}.jpeg">' +
		'</tpl>'
});
