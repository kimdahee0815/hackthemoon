---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: work
tags:
  - work
  - report
aliases: 
---
<%* let str = tp.file.title; var regex = / - \d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/g; let result = str.replaceAll(regex,  "");  -%>
## Work Overview
[[content/3_Learning/Overview/work|Work Overview]]

## Work References
#### Today
```dataview
TABLE
date
From "content"
where contains(tags,"work") and date = date("<% moment().format("YYYY-MM-DD") %>") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```
#### This week
```dataview
TABLE
date
From "content"
where contains(tags,"work") and date >= 
date("<% tp.date.weekday("YYYY-MM-DD", 0, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>") and date <= date("<% tp.date.weekday("YYYY-MM-DD", 6, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```

## Work
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