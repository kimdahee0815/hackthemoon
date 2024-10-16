---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: event
tags:
  - event
aliases:
rating: 
img: 
---
# [[<% tp.file.title %>]]
## Personal Pics / Vids
















## Lessons & Learnings 















### Event References
##### Event Report
[[content/5_Event/Report/Event/<% tp.file.title %>|<% tp.file.title %> Report]]

<% await tp.file.move("content/5_Event/"+tp.file.title) %>



