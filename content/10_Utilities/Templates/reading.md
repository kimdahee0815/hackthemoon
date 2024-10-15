---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.file.title %>
type: reading
tags:
  - daily-routine
  - reading
aliases: 
---
# Reading








### Reading References
[[content/4_Book/Overview/book|Book Overview]]
[[Atlas/Maps/Monthly/reading |Reading Monthly View]]
[[Atlas/Maps/Yearly/reading |Reading Yearly View]]

##### Books
###### Today
```dataview
TABLE
("![|100](" + cover + ")") as Cover,
date
From "Atlas/Notes"
where contains(tags,"book") and date = date("<% tp.file.title %>")
```
###### This week
```dataview
TABLE
("![|100](" + cover + ")") as Cover,
date
From "Atlas/Notes"
where contains(tags,"book") and date >= 
date("<% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %>") and date <= date("<% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>")
```

##### Book Report
###### Today
```toggl
SUMMARY <% tp.file.title %>
INCLUDE PROJECTS "Reading"
TITLE "TODAY REPORT"
```
```toggl
list <% tp.file.title %>
include projects "Reading"
group by project
```
###### This week
```toggl
SUMMARY FROM <% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> TO <% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>
INCLUDE PROJECTS "Reading"
TITLE "THIS WEEK REPORT"
```
```toggl
list
FROM <% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> TO <% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>
include projects "Reading"
group by project
```
