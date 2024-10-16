---
share: true
dataview: true
links.internals: true
category: 9_Music/Overview
tags:
  - music
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

[[content/Steal The Show]]
