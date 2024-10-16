---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: shadowing
tags:
  - shadowing
  - english
  - flashcards
aliases:
---
# [[<% tp.file.title %>]] 




















### Shadowing References
##### Shadowing Report
[[content/3_Learning/Report/Shadowing/<% tp.file.title %>|<% tp.file.title %> Report]]

<% await tp.file.move("content/3_Learning/"+tp.file.title) %>