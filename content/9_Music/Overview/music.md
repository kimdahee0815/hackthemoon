---
share: true
dataview: true
links.internals: true
links.nonshared: true
category: 9_Music/Overview
tags:
  - movie
  - overview
---
# music Overview
```dataview
Table 
artists as Artists,
("![|100](" + cover-url + ")") as Cover,
album as Album,
rating as Rating⭐,
date
From "content"
where contains(tags,"music") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```