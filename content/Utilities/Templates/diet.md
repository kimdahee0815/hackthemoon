---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.file.title %>
type: diet
tags:
  - daily-routine
  - diet
aliases: 
breakfast: 
breakfastKind: 
lunch: 
lunchKind: 
dinner: 
dinnerKind: 
snack: 
snackKind: 
---
# Diet





## Breakfast







```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Diet/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.breakfast = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").breakfast;
fm.breakfastKind = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").breakfastKind;
});				

```
### Breakfast References


## Lunch







```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Diet/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.lunch = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").lunch;
fm.lunchKind = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").lunchKind;
});				

```
### Lunch References


## Snack








```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Diet/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.snack = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").snack;
fm.snackKind = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").snackKind;
});				

```
### Snack References
[[content/2_Routine/3_Monthly/Overview/snack|Snack Monthly View]]
[[content/2_Routine/4_Yearly/Overview/snack|Snack Yearly View]]
## Dinner








```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Diet/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.dinner = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").dinner;
fm.dinnerKind = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").dinnerKind;
});				

```
### Dinner References

