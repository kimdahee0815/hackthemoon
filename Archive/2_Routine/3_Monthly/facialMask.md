---
share: true
dataview: true
category: 2_Routine/3_Monthly/Overview
tags:
  - monthly
  - facialMask
  - overview
---
# Facial Mask
```tracker
searchType: text
searchTarget: 'facialMask: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Facial Mask
fixedScale: 1.1
month:
	mode: annotation
	annotation: 😌
	startWeekOn: 'Mon'
	color: pink
```

```tracker
searchType: text
searchTarget: 'facialMask: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Facial Mask
summary:
	template: "Longest Streak: {{maxStreak()}} day(s)\nLongest Breaks: {{maxBreaks()}} day(s)\nLast streak: {{currentStreak()}} day(s)"
```