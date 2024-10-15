---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: book
tags:
  - class
  - report
aliases: 
---
<%* let str = tp.file.title; var regex = / - \d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/g; let result = str.replaceAll(regex,  "");  -%>
## Class Overview
[[content/3_Learning/Overview/class|Class Overview]]
## Class References
#### Today
```dataview
TABLE
date
From "content"
where contains(tags,"class") and date = date("<% moment().format("YYYY-MM-DD") %>") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```
#### This week
```dataview
TABLE
date
From "content"
where contains(tags,"class") and date >= 
date("<% tp.date.weekday("YYYY-MM-DD", 0, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>") and date <= date("<% tp.date.weekday("YYYY-MM-DD", 6, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```

## Class Report
#### Today
```toggl
SUMMARY <% moment().format("YYYY-MM-DD") %>
INCLUDE TAGS #"<% `${result}`%>"
TITLE "TODAY REPORT"
```
```toggl
list <% moment().format("YYYY-MM-DD") %>
INCLUDE TAGS #"<% `${result}`%>"
group by project
```
#### This week
```toggl
SUMMARY FROM <% tp.date.weekday("YYYY-MM-DD", 0, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %> TO <% tp.date.weekday("YYYY-MM-DD", 6, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>
INCLUDE TAGS #"<% `${result}`%>"
TITLE "THIS WEEK REPORT"
```
```toggl
list
FROM <% tp.date.weekday("YYYY-MM-DD", 0, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %> TO <% tp.date.weekday("YYYY-MM-DD", 6, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>
INCLUDE TAGS #"<% `${result}`%>"
group by project
```