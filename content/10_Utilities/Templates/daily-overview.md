---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.file.title %>
type: todayOverview
tags:
  - todayOverview
aliases: 
---
# Today Overview

## Today
```toggl
SUMMARY 
TODAY
INCLUDE PROJECTS "Developing", "English", "Entertainment", "Event", "Obsidian", "Reading", "WebSurfing", "Work", "Workout"
TITLE "TODAY REPORT"
```
```toggl
list 
TODAY
INCLUDE PROJECTS "Developing", "English", "Entertainment", "Event", "Obsidian", "Reading", "WebSurfing", "Work", "Workout"
group by project
```
## This week
```toggl
SUMMARY FROM <% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> TO <% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>
INCLUDE PROJECTS "Developing", "English", "Entertainment", "Event", "Obsidian", "Reading", "WebSurfing", "Work", "Workout"
TITLE "THIS WEEK REPORT"
```
```toggl
list
FROM <% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> TO <% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>
INCLUDE PROJECTS "Developing", "English", "Entertainment", "Event", "Obsidian", "Reading", "WebSurfing", "Work", "Workout"
group by project
```

### Developing 
#### Today
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"developing") and date = date("<% tp.file.title %>")
sort date desc
```
#### This week
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"developing") and date >= 
date("<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>") and date <= date("<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>")
sort date desc
```

### English 
#### Today
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"english") and date = date("<% tp.file.title %>")
sort date desc
```
#### This week
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"english") and date >= 
date("<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>") and date <= date("<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>")
sort date desc
```

### Reading 
#### Today
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"reading") and date = date("<% tp.file.title %>")
sort date desc
```
#### This week
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"reading") and date >= 
date("<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>") and date <= date("<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>")
sort date desc
```

### Obsidian 
#### Today
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"obsidian") and date = date("<% tp.file.title %>")
sort date desc
```
#### This week
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"obsidian") and date >= 
date("<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>") and date <= date("<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>")
sort date desc
```

### Workout 
#### Today
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"workout") and date = date("<% tp.file.title %>")
sort date desc
```
#### This week
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"workout") and date >= 
date("<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>") and date <= date("<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>")
sort date desc
```

### Work
#### Today
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"work") and date = date("<% tp.file.title %>")
sort date desc
```
#### This week
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"work") and date >= 
date("<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>") and date <= date("<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>")
sort date desc
```

### Web-Surfing 
#### Today
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"web-surfing") and date = date("<% tp.file.title %>")
sort date desc
```
#### This week
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"web-surfing") and date >= 
date("<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>") and date <= date("<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>")
sort date desc
```

### Event 
#### Today
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"event") and date = date("<% tp.file.title %>")
sort date desc
```
#### This week
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"event") and date >= 
date("<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>") and date <= date("<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>")
sort date desc
```

### Entertainment 
#### Today
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"entertainment") and date = date("<% tp.file.title %>")
sort date desc
```
#### This week
```dataview
TABLE
date
From "Atlas/Notes"
where contains(tags,"entertainment") and date >= 
date("<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>") and date <= date("<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>")
sort date desc
```