---
share: true
dataview: true
category: 2_Routine/3_Monthly/Overview
tags:
  - monthly
  - vitaminD
  - overview
---
# VitaminD
```tracker
searchType: text
searchTarget: 'vitaminD: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Vitamin D
startDate:
endDate:
fixedScale: 1.1
month:
	mode: annotation
	annotation: 💛
	startWeekOn: 'Mon'
	color: pink
```

```tracker
searchType: text
searchTarget: 'vitaminD: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: vitaminD
summary:
	template: "Longest Streak: {{maxStreak()}} day(s)\nLongest Breaks: {{maxBreaks()}} day(s)\nLast streak: {{currentStreak()}} day(s)"
```