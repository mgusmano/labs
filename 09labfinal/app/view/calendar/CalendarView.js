
Ext.define('AppCamp.view.calendar.CalendarView',{
	extend: 'AppCamp.view.base.BaseContainer',
	xtype: 'calendar-calendarview',
	controller: 'calendar-calendarview',
	viewModel: 'calendar-calendarview',
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
