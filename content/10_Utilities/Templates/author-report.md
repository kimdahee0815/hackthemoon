---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
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
where contains(tags,"author") and date = date("<% moment().format("YYYY-MM-DD") %>") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```
#### This week
```dataview
TABLE
img as Img,
date
From "content"
where contains(tags,"author") and date >= 
date("<% tp.date.weekday("YYYY-MM-DD", 0, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>") and date <= date("<% tp.date.weekday("YYYY-MM-DD", 6, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```
#### Book 
```dataview
TABLE
("![|100](" + cover + ")") as Cover,
rating as Rating⭐,
date
From "content"
where icontains(author, "<% tp.file.title %>") and contains(tags,"book") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```

## Author Report
#### Today
```toggl
SUMMARY <% moment().format("YYYY-MM-DD") %>
INCLUDE TAGS #"<% tp.file.title %>"
TITLE "TODAY REPORT"
```
```toggl
list <% moment().format("YYYY-MM-DD") %>
INCLUDE TAGS #"<% tp.file.title %>"
group by project
```
#### This week
```toggl
SUMMARY FROM <% tp.date.weekday("YYYY-MM-DD", 0, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %> TO <% tp.date.weekday("YYYY-MM-DD", 6, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>
INCLUDE TAGS #"<% tp.file.title %>"
TITLE "THIS WEEK REPORT"
```
```toggl
list
FROM <% tp.date.weekday("YYYY-MM-DD", 0, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %> TO <% tp.date.weekday("YYYY-MM-DD", 6, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>
INCLUDE TAGS #"<% tp.file.title %>"
group by project
```