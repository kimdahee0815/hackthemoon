---
share: true
dataview: true
category: 2_Routine/3_Monthly/Overview
tags:
  - monthly
  - brushHair
  - overview
---
# Brush hair
```tracker
searchType: text
searchTarget: 'brushHair: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Brush Hair
startDate:
endDate:
fixedScale: 1.1
month:
	mode: annotation
	annotation: 🪮
	startWeekOn: 'Mon'
	color: violet
```

```tracker
searchType: text
searchTarget: 'brushHair: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Brush Hair
summary:
	template: "Longest Streak: {{maxStreak()}} day(s)\nLongest Breaks: {{maxBreaks()}} day(s)\nLast streak: {{currentStreak()}} day(s)"
```