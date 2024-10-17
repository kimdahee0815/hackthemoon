---
draft: true
dataview: true
category: 2_Routine/3_Monthly/Overview
tags:
  - monthly
  - weight
  - overview
---
# Weight
```tracker
searchType: frontmatter
searchTarget: weight
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Weight
fixedScale: 1.1
month:
	startWeekOn: 'Mon'
	color: pink
	threshold: 52
	circleColorByValue: true 
	todayRingColor: white
	selectedRingColor: steelblue
```

```tracker
searchType: frontmatter
searchTarget: weight
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Weight
summary:
	template: "Longest Streak: {{maxStreak()}} day(s)\nLongest Breaks: {{maxBreaks()}} day(s)\nLast streak: {{currentStreak()}} day(s)"
```