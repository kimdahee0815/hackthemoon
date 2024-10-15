---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: shadowing
tags:
  - shadowing
  - report
aliases: 
---
<%* let str = tp.file.title; var regex = / - \d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/g; let result = str.replaceAll(regex,  "");  -%>
## Shadowing Overview
[[content/3_Learning/Overview/shadowing|Shdowing Overview]]

## Shadowing References
#### Movie/Drama 
```dataview
TABLE
("![|100](" + poster + ")") as Cover,
rating as Rating⭐,
date
From "content"
where icontains(file.name,"<%`${result}`%>") and contains(tags, "entertainment") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```

#### Shadowing
```dataview
TABLE
img as Img,
rating as Rating⭐,
date
From "content"
where contains(tags,"shadowing") and icontains(file.title, "<%`${result}`%>") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```

## Shadowing Report
#### Today
```toggl
SUMMARY <% tp.file.title %>
INCLUDE TAGS #"shadowing"
TITLE "TODAY REPORT"
```
```toggl
list <% tp.file.title %>
INCLUDE TAGS #"shadowing"
group by project
```
#### This week
```toggl
SUMMARY FROM <% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> TO <% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>
INCLUDE TAGS #"shadowing"
TITLE "THIS WEEK REPORT"
```
```toggl
list
FROM <% tp.date.weekday("YYYY-MM-DD", 0, tp.file.title, "YYYY-MM-DD") %> TO <% tp.date.weekday("YYYY-MM-DD", 6, tp.file.title, "YYYY-MM-DD") %>
INCLUDE TAGS #"shadowing"
group by project
```