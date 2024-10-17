---
share: true
created-date: 2024-10-17 6:03:25 pm
date: 2024-10-17
type: book
tags:
  - developing
  - report
aliases: 
---

## Developing Overview
[[content/3_Learning/Overview/developing|Developing Overview]]

## Developing References
#### Today
```dataview
TABLE
date
From "content"
where contains(tags,"developing") and date = date("2024-10-17") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```
#### This week
```dataview
TABLE
date
From "content"
where contains(tags,"developing") and date >= 
date("2024-10-14") and date <= date("2024-10-20") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```

## Developing Report
#### Today
```toggl
SUMMARY 2024-10-17
INCLUDE TAGS #"AWS Associate"
TITLE "TODAY REPORT"
```
```toggl
list 2024-10-17
INCLUDE TAGS #"AWS Associate"
group by project
```
#### This week
```toggl
SUMMARY FROM 2024-10-14 TO 2024-10-20
INCLUDE TAGS #"AWS Associate"
TITLE "THIS WEEK REPORT"
```
```toggl
list
FROM 2024-10-14 TO 2024-10-20
INCLUDE TAGS #"AWS Associate"
group by project
```