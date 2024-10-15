---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: book
tags:
  - book
  - report
aliases: 
---
<%* 
let page = undefined;
let pages = undefined;
let author = undefined;

let dv = this.app.plugins.plugins.dataview.api;

let bookResult = dv.pages('"content/4_Book"').where(p => p.file.name.contains(tp.file.title));
console.log(bookResult)
if(bookResult.length != 0) {
	pages = bookResult.values;
	for(let p of pages){
		if(p.file.folder === "content/4_Book"){
			page = p;
			break;
		}
	}
	author = page.author;
}
-%>

## Book Overview
[[content/4_Book/Overview/book|Book Overview]]

## Book References
##### Today
```dataview
TABLE
("![|100](" + cover + ")") as Cover,
rating as Rating⭐,
date
From "content"
where contains(tags,"book") and date = date("<% moment().format("YYYY-MM-DD") %>") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```
##### This week
```dataview
TABLE
("![|100](" + cover + ")") as Cover,
rating as Rating⭐,
date
From "content"
where contains(tags,"book") and date >= 
date("<% tp.date.weekday("YYYY-MM-DD", 0, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>") and date <= date("<% tp.date.weekday("YYYY-MM-DD", 6, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```

##### Author 
```dataview
TABLE
img as Img,
date
From "content"
	where icontains(file.name, "<% `${author}` %>") and contains(tags, "author") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```

## Book Report
##### Today
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
##### This week
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