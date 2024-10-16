---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.file.title %>
type: diary
tags:
  - daily-routine
  - diary
aliases: 
diary: 
gratitude: 
moodTracker: 
---
# Diary

>[!important] 일기 잘 쓰는 방법
>상황
>생각
>느낌
>욕구
>행동
>결과






```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Diary/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.diary = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").diary;
});				

```
### Diary References
[[content/2_Routine/3_Monthly/Overview/diary|Diary Monthly View]]
[[content/2_Routine/4_Yearly/Overview/diary|Diary Yearly View]]


## Gratitude







```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Diary/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.gratitude = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").gratitude;
});				

```
### Gratitude References
[[content/2_Routine/3_Monthly/Overview/gratitude|Gratitude Monthly View]]
[[content/2_Routine/4_Yearly/Overview/gratitude|Gratitude Yearly View]]

```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Diary/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.moodTracker = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").moodTracker;
});				

```


