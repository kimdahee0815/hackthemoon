---
share: true
dataview: true
category: 2_Routine/3_Monthly/Overview
tags:
  - monthly
  - cleaningHouse
  - overview
---
# Morning Cleaning House
```tracker
searchType: text
searchTarget: 'morningCleaningHouse: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Morning Cleaning House
fixedScale: 1.1
month:
	mode: annotation
	annotation: 🧹
	startWeekOn: 'Mon'
	color: "#ffff33"
```

```tracker
searchType: text
searchTarget: 'morningCleaningHouse: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Morning Cleaning House
summary:
	template: "Longest Streak: {{maxStreak()}} day(s)\nLongest Breaks: {{maxBreaks()}} day(s)\nLast streak: {{currentStreak()}} day(s)"
```

# Evening Cleaning House
```tracker
searchType: text
searchTarget: 'eveningCleaningHouse: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Evening Cleaning House
fixedScale: 1.1
month:
	mode: annotation
	annotation: 🧹
	startWeekOn: 'Mon'
	color: "#ffff33"
```

```tracker
searchType: text
searchTarget: 'eveningCleaningHouse: true'
folder: content/2_Routine/1_Daily/Daily-Routine
datasetName: Eveing Cleaning House
summary:
	template: "Longest Streak: {{maxStreak()}} day(s)\nLongest Breaks: {{maxBreaks()}} day(s)\nLast streak: {{currentStreak()}} day(s)"
```