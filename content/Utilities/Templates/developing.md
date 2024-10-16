---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: developing
tags:
  - developing
aliases:
---
# [[<% tp.file.title %>]]


























### Developing References
##### Developing Report
[[content/3_Learning/Report/Developing/<% tp.file.title %>|<% tp.file.title %> Report]]

<% await tp.file.move("content/3_Learning/"+tp.file.title) %>
