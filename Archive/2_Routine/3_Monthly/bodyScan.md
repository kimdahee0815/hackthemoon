---
share: true
dataview: true
category: 2_Routine/3_Monthly/Overview
tags:
  - monthly
  - bodyScan
  - overview
---
# Body Scan
```tracker
searchType: text
searchTarget: 'bodyScan: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Body Scan
fixedScale: 1.1
month:
	mode: annotation
	annotation: 🧍‍♀️
	startWeekOn: 'Mon'
	color: skyblue
```

```tracker
searchType: text
searchTarget: 'bodyScan: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Body Scan
summary:
	template: "Longest Streak: {{maxStreak()}} day(s)\nLongest Breaks: {{maxBreaks()}} day(s)\nLast streak: {{currentStreak()}} day(s)"
```