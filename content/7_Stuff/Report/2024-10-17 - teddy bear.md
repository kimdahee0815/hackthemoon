---
share: true
created-date: 2024-10-17 6:05:35 pm
date: 2024-10-17
type: stuff
tags:
  - stuff
  - report
aliases: 
---
## Stuff Overview
[[content/7_Stuff/Overview/stuff|Stuff Overview]]

## Stuff References
#### Today
```dataview
TABLE
img as Img,
rating as Rating⭐,
date
From "content"
where contains(tags,"stuff") and date = date("2024-10-17") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```
#### This week
```dataview
TABLE
img as Img,
rating as Rating⭐,
date
From "content"
where contains(tags,"stuff") and date >= 
date("2024-10-14") and date <= date("2024-10-20") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```

## Stuff Report
#### Today
```toggl
SUMMARY 2024-10-17
INCLUDE TAGS #"teddy bear"
TITLE "TODAY REPORT"
```
```toggl
list 2024-10-17
INCLUDE TAGS #"teddy bear"
group by project
```
#### This week
```toggl
SUMMARY FROM 2024-10-14 TO 2024-10-20
INCLUDE TAGS #"teddy bear"
TITLE "THIS WEEK REPORT"
```
```toggl
list
FROM 2024-10-14 TO 2024-10-20
INCLUDE TAGS #"teddy bear"
group by project
```
