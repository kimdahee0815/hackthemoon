---
share: true
dataview: true
category: 2_Routine/3_Monthly/Overview
tags:
  - monthly
  - morningSkincare
  - overview
---
# Morning skincare
```tracker
searchType: text
searchTarget: 'morningSkincare: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Morning Skincare
fixedScale: 1.1
month:
	mode: annotation
	annotation: 🧖‍♀️
	startWeekOn: 'Mon'
	color: pink
```

```tracker
searchType: text
searchTarget: 'morningSkincare: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Morning Skincare
summary:
	template: "Longest Streak: {{maxStreak()}} day(s)\nLongest Breaks: {{maxBreaks()}} day(s)\nLast streak: {{currentStreak()}} day(s)"
```