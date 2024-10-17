---
share: true
created-date: 2024-10-17 5:58:54 pm
date: 2024-10-17
type: author
tags:
  - person
  - author
  - book
  - report
aliases: 
---
## Author Overview
[[content/6_People/Overview/author|Author Overview]]

## Author References
#### Today
```dataview
TABLE
img as Img,
date
From "content"
where contains(tags,"author") and date = date("2024-10-17") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```
#### This week
```dataview
TABLE
img as Img,
date
From "content"
where contains(tags,"author") and date >= 
date("2024-10-14") and date <= date("2024-10-20") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```
#### Book 
```dataview
TABLE
("![|100](" + cover + ")") as Cover,
rating as Rating⭐,
date
From "content"
where icontains(author, "J. K. Rowling") and contains(tags,"book") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```

## Author Report
#### Today
```toggl
SUMMARY 2024-10-17
INCLUDE TAGS #"J. K. Rowling"
TITLE "TODAY REPORT"
```
```toggl
list 2024-10-17
INCLUDE TAGS #"J. K. Rowling"
group by project
```
#### This week
```toggl
SUMMARY FROM 2024-10-14 TO 2024-10-20
INCLUDE TAGS #"J. K. Rowling"
TITLE "THIS WEEK REPORT"
```
```toggl
list
FROM 2024-10-14 TO 2024-10-20
INCLUDE TAGS #"J. K. Rowling"
group by project
```