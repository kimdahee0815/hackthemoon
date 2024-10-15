---
share: true
dataview: true
category: 3_Learning/Overview
tags:
  - web-surfing
  - overview
---
# web-surfing Overview
```dataview
Table 
img as Img,
date
From "content"
where contains(tags,"web-surfing") and !contains(tags, "stuff") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```
