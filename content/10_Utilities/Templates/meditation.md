---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.file.title %>
type: meditation
tags:
  - daily-routine
  - meditation
aliases: 
meditation: 
---
# Meditation











```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Meditation/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.meditation = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").meditation;
});				

```
### Meditation References
[[content/2_Routine/3_Monthly/Overview/meditation|Meditation Monthly View]]
[[content/2_Routine/4_Yearly/Overview/meditation|Meditation Yearly View]]