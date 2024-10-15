---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: stuff
tags:
  - stuff
aliases: 
rating: 
img:
---
# [[<% tp.file.title %>]]





















### Stuff References
##### Stuff Report
[[content/7_Stuff/Report/<% tp.file.title %>|<% tp.file.title %> Report]]

<% await tp.file.move("content/7_Stuff/"+tp.file.title) %>