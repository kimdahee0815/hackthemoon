---
share: true
dataview: true
category: 2_Routine/3_Monthly/Overview
tags:
  - monthly
  - diary
  - overview
---
# Diary
```tracker
searchType: text
searchTarget: 'diary: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Diary
startDate:
endDate:
fixedScale: 1.1
month:
	mode: annotation
	annotation: 🖊️
	startWeekOn: 'Mon'
	color: pink
```

```tracker
searchType: text
searchTarget: 'diary: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Diary
summary:
	template: "Longest Streak: {{maxStreak()}} day(s)\nLongest Breaks: {{maxBreaks()}} day(s)\nLast streak: {{currentStreak()}} day(s)"
```