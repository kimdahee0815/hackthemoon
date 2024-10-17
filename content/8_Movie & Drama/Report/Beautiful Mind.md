---
share: true
created-date: 2024-10-17 6:06:28 pm
date: 2024-10-17
type: entertainment
tags:
  - movie
  - drama
  - report
aliases: 
---
## Movie/Drama Overview
[[content/8_Movie & Drama/Overview/movie|Movie Overview]]
[[content/8_Movie & Drama/Overview/drama|Drama Overview]]

## Movie References
#### Today
```dataview
TABLE
("![|100](" + poster + ")") as Cover,
rating as Rating⭐,
date
From "content"
where contains(tags,"movie") and date = date("2024-10-17") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```
#### This week
```dataview
TABLE
("![|100](" + poster + ")") as Cover,
rating as Rating⭐,
date
From "content"
where contains(tags,"movie") and date >= 
date("2024-10-14") and date <= date("2024-10-20") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```

## Drama References
#### Today
```dataview
TABLE
("![|100](" + poster + ")") as Cover,
date
From "content"
where contains(tags,"drama") and date = date("2024-10-17") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```
#### This week
```dataview
TABLE
("![|100](" + poster + ")") as Cover,
date
From "content"
where contains(tags,"drama") and date >= 
date("2024-10-14") and date <= date("2024-10-20") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```

## Movie/Drama Report
#### Today
```toggl
SUMMARY 2024-10-17
INCLUDE TAGS #"Beautiful Mind"
TITLE "TODAY REPORT"
```
```toggl
list 2024-10-17
INCLUDE TAGS #"Beautiful Mind"
group by project
```
#### This week
```toggl
SUMMARY FROM 2024-10-14 TO 2024-10-20
INCLUDE TAGS #"Beautiful Mind"
TITLE "THIS WEEK REPORT"
```
```toggl
list
FROM 2024-10-14 TO 2024-10-20
INCLUDE TAGS #"Beautiful Mind"
group by project
```