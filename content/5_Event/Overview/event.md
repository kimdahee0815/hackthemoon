---
share: true
dataview: true
category: 5_Event/Overview
tags:
  - event
  - overview
---
# event Overview
```dataview
Table 
img as Img,
rating as Rating⭐,
date
From "content"
where contains(tags,"event") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```

