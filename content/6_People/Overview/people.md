---
share: true
dataview: true
category: 6_People/Overview
tags:
  - people
  - overview
---
# people Overview
## Social
```dataview
Table 
img as Img,
date
From "content"
where contains(tags, "people") and !contains(tags, "personal") and !contains(tags, "author") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```
## Personal
```dataview
Table 
img as Img,
date
From "content"
where contains(tags, "people") and contains(tags, "personal") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```

