---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.file.title %>
type: workout
tags:
  - daily-routine
  - workout
aliases: 
stretching: 
workout: 
---
## Stretching









```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Workout/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.stretching = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").stretching;
});				

```
### Stretching References
[[content/2_Routine/3_Monthly/Overview/stretching|Stretching Monthly View]]
[[content/2_Routine/4_Yearly/Overview/stretching|Stretching Yearly View]]

```dataview
Table 
("![|100](" + img + ")") as youtube,
youtuber as youtuber,
channelName as channel
From "Atlas/Notes"
where file.name != this.file.name 
and contains(tags, "stretching")
```
## Workout






```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Workout/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.workout = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").workout;
});				

```
### Workout References
[[content/2_Routine/3_Monthly/Overview/workout|Workout Monthly View]]
[[content/2_Routine/4_Yearly/Overview/workout|Workout Yearly View]]

```dataview
Table 
("![|100](" + img + ")") as youtube,
youtuber as youtuber,
channelName as channel
From "Atlas/Notes"
where file.name != this.file.name 
and contains(tags, "workout")
```

