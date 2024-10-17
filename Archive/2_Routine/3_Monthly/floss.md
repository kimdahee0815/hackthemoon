---
share: true
dataview: true
category: 2_Routine/3_Monthly/Overview
tags:
  - monthly
  - floss
  - overview
---
# Floss
```tracker
searchType: text
searchTarget: 'floss: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Floss
fixedScale: 1.1
month:
	mode: annotation
	annotation: 🪥
	startWeekOn: 'Mon'
	color: "#CCFFFF"
```

```tracker
searchType: text
searchTarget: 'floss: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Face Scan
summary:
	template: "Longest Streak: {{maxStreak()}} day(s)\nLongest Breaks: {{maxBreaks()}} day(s)\nLast streak: {{currentStreak()}} day(s)"
```