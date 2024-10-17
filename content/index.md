---
share: true
title: Hack The Moon
sticker: emoji//1f60d
cssclasses:
  - dashboard
---
# Let's hack the moon together! 🌜😊💕
## Projects 
💼 Career 
```dataview
LIST  
FROM "content"
WHERE contains(tags, "project") and contains(tags, "work")
SORT date DESC 
```

🧭 Life Explorer
```dataview
LIST 
FROM "content"
WHERE contains(tags, "project") and contains(tags, "life")
SORT date DESC 
```

## Everyday Self-Development
💻 Developing 
```dataview
LIST  
FROM "content"	WHERE contains(tags, "developing") and file.name != "developing" and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")	SORT date DESC 	LIMIT 10
```

📖 Books
```dataview
LIST 
FROM "content"
WHERE contains(tags, "book") and file.name != "book" and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

🎧 English
```dataview
LIST 
FROM "content"
WHERE contains(tags, "english") and file.name != "english-podcast" and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

## Resource Notes
👩🏻‍🏫 Classes
```dataview
LIST 
FROM "content"
WHERE contains(tags, "class") and !contains(tags, "developing") and file.name != "class" and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

💼 Work
```dataview
LIST 
FROM "content"
WHERE contains(tags, "work") and !contains(tags, "workout") and file.name != "work" and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

🤝 Meeting
```dataview
LIST 
FROM "content"
WHERE contains(tags, "meeting") and file.name != "meeting" and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

✒️ Author
```dataview
LIST 
FROM "content"
WHERE contains(tags, "author") and file.name != "author" and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

🧸 Stuff
```dataview
LIST 
FROM "content"
WHERE contains(tags, "stuff") and file.name != "stuff" and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

🖥️ Web-Surfing
```dataview
LIST 
FROM "content"
WHERE contains(tags, "web-surfing") and !contains(tags, "stuff") and file.name != "web-surfing" and !contains(tags, "overview") and !contains(tags, "report") and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```
## Event Notes
💃 meTime
```dataview
LIST 
FROM "content"
WHERE contains(tags, "meTime") and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

🙂 friends
```dataview
LIST 
FROM "content"
WHERE contains(tags, "friends") and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

😍 dates
```dataview
LIST 
FROM "content"
WHERE contains(tags, "dates") and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

👨‍👩‍👧‍👦 Family
```dataview
LIST 
FROM "content"
WHERE contains(tags, "family") and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

🌅 Exotic Vacations
```dataview
LIST 
FROM "content"
WHERE contains(tags, "vacation") and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

## Entertainment
🎞️ Movies/Dramas Watched
```dataview
LIST 
FROM "content"
WHERE contains(tags, "movie") or contains(tags, "drama") and !contains(tags, "report") and file.name != "movie" and file.name != "drama" and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

🎥 Movies/Dramas to Watch
```dataview
LIST 
FROM "content"
WHERE contains(tags, "to watch") and !contains(tags, "report") and file.name != "movie" and file.name != "drama" and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

🎶 Music
```dataview
LIST 
FROM "content"
WHERE contains(tags, "music") and !contains(tags, "report") and file.name != "music" and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

▶️ Youtube
```dataview
LIST 
FROM "content"
WHERE contains(tags, "youtube") and contains(tags, "entertainment") and !contains(tags, "report") and file.name != "youtube" and !contains(file.folder, "Utilities")
SORT date DESC 
LIMIT 10
```

## Vault Info
🗄️ Recent file updates 
```dataview
LIST 
FROM "content"
SORT file.mtime DESC 
LIMIT 10
```

🔖 Draft: need to check! 
```dataview
LIST 
FROM "#draft"
SORT file.name DESC 
LIMIT 10
```

- 〽️ Stats
    - File Count: `$=dv.pages().length`
    - Daily Routines: `$=dv.pages('"content/2_Routine/1_Daily/Daily-Routine"').length`
    - Daily Drawings: `$=dv.pages('"content/2_Routine/1_Daily/Daily-Drawing"').length`
    - Book: `$=dv.pages('"content/4_Book"').where(p => {return p.tags.contains("book")}).length`
    - English: `$=dv.pages('"content/3_Learning"').where(p => {return p.tags.contains("english")}).length`
    - Developing: `$=dv.pages('"content/3_Learning"').where(p => {return p.tags.contains("developing")}).length`
    - Class: `$=dv.pages('"content/3_Learning"').where(p => {return p.tags.contains("class")}).length`
    - Meeting: `$=dv.pages('"content/5_Event"').where(p => {return p.tags.contains("meeting")}).length`
    - Work: `$=dv.pages('"content/3_Learning"').where(p => {return p.tags.contains("work")}).length`
    - Person: `$=dv.pages('"content/6_People"').where(p => {return p.tags.contains("person")}).length`
    - Author: `$=dv.pages('"content/6_People"').where(p => {return p.tags.contains("author")}).length`
    - Stuff: `$=dv.pages('"content/7_Stuff"').where(p => {return p.tags.contains("stuff")}).length`
    - Web-surfing: `$=dv.pages('"content/3_Learning"').where(p => {return p.tags.contains("web-surfing")}).length`
    - Event: `$=dv.pages('"content/5_Event"').where(p => {return p.tags.contains("event")}).length`
    - Movie/Drama: `$=dv.pages('"content/8_Movie & Drama"').where(p => {return p.tags.contains("movie") || p.tags.contains("drama")}).length`
    - Youtube: `$=dv.pages('"content/3_Learning"').where(p => {return p.tags.contains("youtube")}).length`









