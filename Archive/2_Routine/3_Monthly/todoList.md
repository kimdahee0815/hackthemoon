---
share: true
dataview: true
category: 2_Routine/3_Monthly/Overview
tags:
  - monthly
  - todoList
  - overview
---
# TodoList
```tracker
searchType: text
searchTarget: 'todoList: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: TodoList
startDate:
endDate:
fixedScale: 1.1
month:
	mode: annotation
	annotation: ✅
	startWeekOn: 'Mon'
	color: "#8feb26"
```

```tracker
searchType: text
searchTarget: 'todoList: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: TodoList
summary:
	template: "Longest Streak: {{maxStreak()}} day(s)\nLongest Breaks: {{maxBreaks()}} day(s)\nLast streak: {{currentStreak()}} day(s)"
```
