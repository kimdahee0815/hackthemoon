---
share: true
dataview: true
category: 3_Learning/Overview
tags:
  - english
  - podcast
  - overview
---
# english-podcast Overview
```dataview
Table 
("![|100](" + image + ")") as Img,
date
From "content"
where contains(tags,"english") and contains(tags, "podcast") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```

