---
share: true
created-date: 2024-10-17 5:48:18 pm
date: 2024-10-17
type: book
tags:
  - class
  - report
aliases: 
---
## Class Overview
[[content/3_Learning/Overview/class|Class Overview]]
## Class References
#### Today
```dataview
TABLE
date
From "content"
where contains(tags,"class") and date = date("2024-10-17") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```
#### This week
```dataview
TABLE
date
From "content"
where contains(tags,"class") and date >= 
date("2024-10-14") and date <= date("2024-10-20") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```

## Class Report
#### Today
```toggl
SUMMARY 2024-10-17
INCLUDE TAGS #"great class"
TITLE "TODAY REPORT"
```
```toggl
list 2024-10-17
INCLUDE TAGS #"great class"
group by project
```
#### This week
```toggl
SUMMARY FROM 2024-10-14 TO 2024-10-20
INCLUDE TAGS #"great class"
TITLE "THIS WEEK REPORT"
```
```toggl
list
FROM 2024-10-14 TO 2024-10-20
INCLUDE TAGS #"great class"
group by project
```