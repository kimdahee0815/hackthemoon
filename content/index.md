---
share: true
dataview: true
title: Hack The Moon
sticker: emoji//1f60d
---
# Let's hack the moon together! 🌜😊💕
## Projects 
- 💼 Career 
	```dataview
	LIST  
	FROM "content"
	WHERE contains(tags, "project") and contains(tags, "work") and !contains(tags, "overview") and !contains(tags, "report")
	SORT date DESC 
	```

- 🧭 Life Explorer
	```dataview
	LIST 
	FROM "content"
	WHERE contains(tags, "project") and contains(tags, "life") and !contains(tags, "overview") and !contains(tags, "report")
	SORT date DESC 
	```

## Everyday Self-Development
- 💻 Developing 
	```dataview
	LIST  
	FROM "content"
	WHERE contains(tags, "developing") and file.name != "developing" and !contains(tags, "overview") and !contains(tags, "report")
	SORT date DESC 
	LIMIT 10
	```

- 📖 Books
    ```dataview
	LIST 
	FROM "content"
	WHERE contains(tags, "book") and file.name != "book" and !contains(tags, "overview") and !contains(tags, "report")
	SORT date DESC 
	LIMIT 10
	```

- 🎧 English
    ```dataview
	LIST 
	FROM "content"
	WHERE contains(tags, "english") and file.name != "english-podcast" and !contains(tags, "overview") and !contains(tags, "report")
	SORT date DESC 
	LIMIT 10
	```

## Resource Notes
- 👩🏻‍🏫 Classes
    ```dataview
	LIST 
	FROM "content"
	WHERE contains(tags, "class") and !contains(tags, "developing") and file.name != "class" and !contains(tags, "overview") and !contains(tags, "report")
	SORT date DESC 
	LIMIT 10
	```

- 💼 Work
    ```dataview
	LIST 
	FROM "content"
	WHERE contains(tags, "work") and !contains(tags, "workout") and file.name != "work" and !contains(tags, "overview") and !contains(tags, "report")
	SORT date DESC 
	LIMIT 10
	```

- 🤝 Meeting
    ```dataview
	LIST 
	FROM "content"
	WHERE contains(tags, "meeting") and file.name != "meeting" and !contains(tags, "overview") and !contains(tags, "report")
	SORT date DESC 
	LIMIT 10
	```

- ✒️ Author
    ```dataview
	LIST 
	FROM "content"
	WHERE contains(tags, "author") and file.name != "author" and !contains(tags, "overview") and !contains(tags, "report")
	SORT date DESC 
	LIMIT 10
	```

- 🧸 Stuff
    ```dataview
	LIST 
	FROM "content"
	WHERE contains(tags, "stuff") and file.name != "stuff" and !contains(tags, "overview") and !contains(tags, "report")
	SORT date DESC 
	LIMIT 10
	```

- 🖥️ Web-Surfing
    ```dataview
	LIST 
	FROM "content"
	WHERE contains(tags, "web-surfing") and !contains(tags, "stuff") and file.name != "web-surfing" and !contains(tags, "overview") and !contains(tags, "report")
	SORT date DESC 
	LIMIT 10
	```
## Event Notes
- 💃 meTime
`$=dv.list(dv.pages('"content/5_Event"').where(p => {return p.tags.contains("meTime");}).sort(f=>f.file.frontmatter.date,"desc").limit(10).file.link)`

- 🙂 friends
`$=dv.list(dv.pages('"content/5_Event"').where(p => {return p.tags.contains("friends");}).sort(f=>f.file.frontmatter.date,"desc").limit(10).file.link)`

- 😍 dates
`$=dv.list(dv.pages('"content/5_Event"').where(p => {return p.tags.contains("dates");}).sort(f=>f.file.frontmatter.date,"desc").limit(10).file.link)`

- 👨‍👩‍👧‍👦 Family
`$=dv.list(dv.pages('"content/5_Event"').where(p => {return p.tags.contains("family");}).sort(f=>f.file.frontmatter.date,"desc").limit(10).file.link)`

- 🌅 Exotic Vacations
`$=dv.list(dv.pages('"content/5_Event"').where(p => {return p.tags.contains("travel");}).sort(f=>f.file.frontmatter.date,"desc").limit(10).file.link)`
## Entertainment
- 🎞️ Movies/Dramas Watched
`$=dv.list(dv.pages('"content/8_Movie & Drama"').where(p => p.file.name != "movie" && p.file.name != "drama").sort(f=>f.file.frontmatter.date,"desc").limit(10).file.link)`

- 🎥 Movies/Dramas to Watch
`$=dv.list(dv.pages('"content/8_Movie & Drama"').where(p => p.tags.contains("to watch")).sort(f=>f.file.frontmatter.date,"desc").limit(10).file.link)`

- 🎶 Music
`$=dv.list(dv.pages('"content/9_Music"').where(p => p.file.name != "music").sort(f=>f.file.frontmatter.date,"desc").limit(10).file.link)`

- ▶️ Youtube
`$=dv.list(dv.pages('"content/3_Learning"').where(p => {return p.tags.contains("youtube") && p.tags.contains("entertainment");}).sort(f=>f.file.frontmatter.date,"desc").limit(10).file.link)`

## Vault Info
- 🗄️ Recent file updates `$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").limit(10).file.link)`
- 🔖 Tagged: need to check! `$=dv.list(dv.pages('#check').sort(f=>f.file.name,"desc").file.link)`
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









