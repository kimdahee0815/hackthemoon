---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: book
tags:
  - book
aliases: 
category: "{{category}}"
title: "{{title}}"
author: "{{author}}"
publisher: "{{publisher}}"
publishDate: "{{publishDate}}"
pages: "{{totalPage}}"
cover: "{{coverUrl}}"
rating: 
status: <progress max=100 value=0> </progress> 0%
---
# [[<% tp.file.title %>]]
## Cover
![cover]({{coverUrl}})
## Reading Logs 














## My Summary















## Memorable Quotes










## Main Takeaway












### Book References
##### Book Report
[[content/4_Book/Report/<% tp.file.title %>|<% tp.file.title %> Report]]

<% await tp.file.move("content/4_Book/"+tp.file.title) %>
