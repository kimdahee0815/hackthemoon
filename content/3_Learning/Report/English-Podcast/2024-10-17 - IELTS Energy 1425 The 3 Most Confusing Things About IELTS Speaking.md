---
share: true
created-date: 2024-10-17 5:57:59 pm
date: 2024-10-17
type: english-podcast
tags:
  - english
  - podcast
  - report
aliases: 
---
## English Podcast Overview
[[content/3_Learning/Overview/english-podcast|English Podcast Overview]]

## English Podcast References
#### Today
```dataview
TABLE
("![|100](" + image + ")") as Cover,
date
From "content"
where contains(tags,"podcast") and contains(tags, "english") and date = date("2024-10-17") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```
#### This week
```dataview
TABLE
("![|100](" + image + ")") as Cover,
date
From "content"
where contains(tags,"podcast") and contains(tags, "english") and date >= 
date("2024-10-14") and date <= date("2024-10-20") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```

## English Podcast Report
#### Today
```toggl
SUMMARY 2024-10-17
INCLUDE TAGS #"podcast"
TITLE "TODAY REPORT"
```
```toggl
list 2024-10-17
INCLUDE TAGS #"podcast"
group by project
```
#### This week
```toggl
SUMMARY FROM 2024-10-14 TO 2024-10-20
INCLUDE TAGS #"podcast"
TITLE "THIS WEEK REPORT"
```
```toggl
list
FROM 2024-10-14 TO 2024-10-20
INCLUDE TAGS #"podcast"
group by project
```