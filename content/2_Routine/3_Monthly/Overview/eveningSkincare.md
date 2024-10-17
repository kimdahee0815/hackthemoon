---
share: true
dataview: true
category: 2_Routine/3_Monthly/Overview
tags:
  - monthly
  - eveningSkincare
  - overview
---
# Evening skincare
```dataviewjs
let pages = dv.pages(`"content/2_Routine/1_Daily/Daily-Routine"`)
const year = moment().format("YYYY")
const month = moment().format("M")
const date_pattern = 'YYYY-MM-DD'
const habits = {
	'eveningSkincare': '🧖‍♀️'
}

let data = {}
let link = {}
for (let page of pages) {
	if(dv.date(page.file.name).c.month == month){
		let date = page.file.name;
		data[date] = data[date] || '';
		link[date] = link[date] || '';

		let eveningSkincare = page.eveningSkincare;
	
		for (let habit in habits) {
			if(eveningSkincare){
			data[date] += habits[habit].replace('{eveningSkincare}', eveningSkincare) + '\n';
			}
			
			link[date] += 
			page.eveningSkincareNote.path;
		}
	}
}

let calendarData = []
for (let date in data) {
	calendarData.push({date: date, content: data[date], link: link[date]})
}
renderHabitCalendar(this.container, dv, {year, month, data: calendarData, date_pattern}) 
```
