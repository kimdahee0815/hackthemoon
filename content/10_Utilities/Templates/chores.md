---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: chores
tags:
  - daily-routine
  - chores
aliases: 
morningCleaningHouse: 
eveningCleaningHouse: 
morningWashingDishes: 
afternoonWashingDishes: 
eveningWashingDishes: 
arrangingDesk: 
---
# Chores

## Cleaning House









```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Chores/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.morningCleaningHouse = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").morningCleaningHouse;
fm.eveningCleaningHouse = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").eveningCleaningHouse;
});				

```
### Cleaning House References
[[content/2_Routine/3_Monthly/Overview/cleaningHouse|Cleaning-House Monthly View]]
[[content/2_Routine/4_Yearly/Overview/cleaningHouse|Cleaning-House Yearly View]]
## Washing Dishes






```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Chores/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.morningWashingDishes = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").morningWashingDishes;
fm.afternoonWashingDishes = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").afternoonWashingDishes;
fm.eveningWashingDishes = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").eveningWashingDishes;
});				

```
### Washing Dishes References
[[content/2_Routine/3_Monthly/Overview/washingDishes|Washing-Dishes Monthly View]]
[[content/2_Routine/4_Yearly/Overview/washingDishes|Washing-Dishes Yearly View]]
## Arranging Desk








```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Chores/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.arrangingDesk = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").arrangingDesk;
});				

```
### Arranging Desk References
[[content/2_Routine/3_Monthly/Overview/arrangingDesk|Washing-Dishes Monthly View]]
[[content/2_Routine/4_Yearly/Overview/arrangingDesk|Arranging-Desk Yearly View]]