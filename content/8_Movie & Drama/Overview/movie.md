---
share: true
dataview: true
category: 8_Movie & Drama/Overview
tags:
  - movie
  - overview
---
# movie Overview
```dataview
Table 
("![|100](" + poster + ")") as Poster,
rating as Rating⭐,
length as Length,
genre as Genre,
scoreImdb as Imdb⭐,
date
From "content"
where contains(tags,"movie") and !contains(tags, "shadowing") and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
sort date desc
```

