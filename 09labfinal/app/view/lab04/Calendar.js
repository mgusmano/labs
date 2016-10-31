
Ext.define('AppCamp.view.lab04.Calendar',{
	extend: 'AppCamp.view.base.BaseContainer',
	xtype: 'app-calendar',
	controller: 'app-calendar',
	viewModel: 'app-calendar',
	requires: [
		'Ext.calendar.panel.Panel'
	],
	layout: 'fit',

	items: [
		{
			xtype: 'calendar',
			margin: 10, shadow: true,
			timezoneOffset: 0,
			store: {
				autoLoad: true,
				proxy: { type: 'memory' },
				data: [
					// { id: 2, title: 'Donald', eventStore: { proxy:'memory', data:[
					// 	{calendarId: 2, title: 'Press Event', startDate: "2016-09-30T09:00:00.000Z", endDate: "2016-09-30T11:00:00.000Z"},
					// 	{calendarId: 2, title: 'Briefing', startDate: "2016-10-02T11:30:00.000Z", endDate: "2016-10-02T15:00:00.000Z"},
					// 	{calendarId: 2, title: 'Briefing', startDate: "2016-09-27T08:30:00.000Z", endDate: "2016-09-27T15:00:00.000Z"}
					// ] } }
					{ id: 2, title: 'Donald', eventStore: { proxy: { type: 'ajax', url: 'resources/app/calendars/DonaldTrump.json' } } },
					{ id: 3, title: 'Hillary', eventStore: { proxy: { type: 'ajax', url: 'resources/app/calendars/HillaryClinton.json' } } }
				]
			},
			views: { 
				month: { xtype: 'calendar-month', titleTpl: '{start:date("F Y")}', label: 'Month', weight: 30 },
				day: { xtype: 'calendar-day', titleTpl: '{start:date("l F d, Y")}', controlStoreRange: false, label: 'Day', weight: 10, dayHeader: null, startTime: 6, endTime: 22 }, 
				week: { xtype: 'calendar-week', dayHeaderFormat: 'D d', controlStoreRange: false, titleTpl: '{start:date("j M")} - {end:date("j M Y")}', label: 'Week', weight: 20 }, 
				workweek: { xtype: 'calendar-week',	dayHeaderFormat: 'D d', titleTpl: '{start:date("j M")} - {end:date("j M")}', label: 'Work Week', 	weight: 15, firstDayOfWeek: 1,visibleDays: 5 }
			}
		}
	]
});
