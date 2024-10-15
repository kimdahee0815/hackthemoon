---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: youtube
tags:
  - youtube
  - report
aliases: 
---
<%* 
let pages = undefined;
let youtuber = undefined;
let page = undefined;

let dv = this.app.plugins.plugins.dataview.api;

let youtubeResult = dv.pages('"content/3_Learning"').where(p => p.file.name.contains(tp.file.title));

if(youtubeResult.length != 0) {
	pages = youtubeResult.values;
	for(let p of pages){
		if(p.file.folder === "content/3_Learning"){
			page = p;
			break;
		}
	}
	youtuber = page.youtuber;
}
-%>
## Youtube Overview
[[content/3_Learning/Overview/youtube|Youtube Overview]]

## Youtuber 
[[content/6_People/<% `${youtuber}` %> |<% `${youtuber}` %>]]
##### Youtube 
###### Today
```dataview
TABLE
("![|100](" + img + ")") as Img,
date
From "content"
where contains(tags,"youtube") and date = date("<% moment().format("YYYY-MM-DD") %>") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```
###### This week
```dataview
TABLE
("![|100](" + img + ")") as Img,
date
From "content"
where contains(tags,"youtube") and date >= 
date("<% tp.date.weekday("YYYY-MM-DD", 0, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>") and date <= date("<% tp.date.weekday("YYYY-MM-DD", 6, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>") and !contains(tags, "overview") and !contains(tags, "report")
sort date desc
```

##### Youtube Report
###### Today
```toggl
SUMMARY <% moment().format("YYYY-MM-DD") %>
INCLUDE TAGS #"youtube"
TITLE "TODAY REPORT"
```
```toggl
list <% moment().format("YYYY-MM-DD") %>
INCLUDE TAGS #"youtube"
group by project
```
###### This week
```toggl
SUMMARY FROM <% tp.date.weekday("YYYY-MM-DD", 0, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %> TO <% tp.date.weekday("YYYY-MM-DD", 6, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>
INCLUDE TAGS #"youtube"
TITLE "THIS WEEK REPORT"
```
```toggl
list
FROM <% tp.date.weekday("YYYY-MM-DD", 0, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %> TO <% tp.date.weekday("YYYY-MM-DD", 6, moment().format("YYYY-MM-DD"), "YYYY-MM-DD") %>
INCLUDE TAGS #"youtube"
group by project
```