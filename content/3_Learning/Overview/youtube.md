---
share: true
dataview: true
category: 3_Learning/Overview
tags:
  - youtube
  - overview
---
# youtube Overview
```dataview
Table 
("![|100](" + img + ")") as Img,
date
From "content"
where contains(tags,"youtube") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```


