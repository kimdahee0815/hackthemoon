---
share: true
dataview: true
category: 2_Routine/3_Monthly/Overview
tags:
  - monthly
  - eyeRelief
  - overview
---
# Eye Relief
```tracker
searchType: text
searchTarget: 'eyeRelief: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: EyeRelief
startDate:
endDate:
fixedScale: 1.1
month:
	mode: annotation
	annotation: 🥽
	startWeekOn: 'Mon'
	color: skyblue
```

```tracker
searchType: text
searchTarget: 'eyeRelief: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: EyeRelief
summary:
	template: "Longest Streak: {{maxStreak()}} day(s)\nLongest Breaks: {{maxBreaks()}} day(s)\nLast streak: {{currentStreak()}} day(s)"
```