---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: english podcast
tags:
  - podcast
  - english
  - AEE
  - flashcards
aliases: 
cssclasses: 
podcastName: "{{VALUE:podcastName}}"
title: "{{VALUE:title}}"
url: "{{VALUE:url}}"
image: "{{VALUE:artworkUrl}}"
guest:
---
# [[{{VALUE:title}}]] 






















### English Podcast References
##### English-Podcast Report
[[content/3_Learning/Report/English-Podcast/<% tp.file.title %>|<% tp.file.title %> Report]]

<% await tp.file.move("content/3_Learning/"+tp.file.title) %>




