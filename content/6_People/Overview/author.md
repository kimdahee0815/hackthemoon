---
share: true
dataview: true
category: 6_People/Overview
tags:
  - people
  - author
  - overview
---
# author Overview
 ```dataview
Table 
img as Img,
date
From "content"
where contains(tags, "author") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```


