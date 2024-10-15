---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: web-surfing
tags:
  - web-surfing
aliases: 
img: 
---
# [[<% tp.file.title %>]]

























### Web-Surfing References
##### Web-Surfing Report
[[content/3_Learning/Report/Web-Surfing/<% tp.file.title %>|<% tp.file.title %> Report]]
<% await tp.file.move("content/3_Learning/"+tp.file.title) %>