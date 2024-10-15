---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: class
courseName: 
tags:
  - class
aliases:
---
# [[<% tp.file.title %>]]






















### Class References
##### Class Report
[[content/3_Learning/Report/Class/<% tp.file.title %>|<% tp.file.title %> Report]]

<% await tp.file.move("content/3_Learning/"+tp.file.title) %>
