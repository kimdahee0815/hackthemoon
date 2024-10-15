---
share: true
dataview: true
category: 7_Stuff/Overview
tags:
  - stuff
  - overview
---
# stuff Overview
```dataview
Table 
img as Img,
rating as Rating⭐,
date
From "content"
where contains(tags,"stuff") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```


