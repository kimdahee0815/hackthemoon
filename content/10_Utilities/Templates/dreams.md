---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.file.title %>
type: dreams
tags:
  - daily-routine
  - dreams
aliases: 
cssclasses:
  - dashboard
affirmation: 
visualization: 
---
# Dreams 












### Dreams References

## Affirmation







```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Dreams/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.affirmation = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").affirmation;
});				

```
### Affirmation References
[[Atlas/Maps/Monthly/affirmation |Affirmation Monthly View]]
[[Atlas/Maps/Yearly/affirmation |Affirmation Yearly View]]
## Visualization










```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Dreams/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.visualization = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").visualization;
});				

```
### Visualization References
[[Atlas/Maps/Monthly/visualization |Visualization Monthly View]]
[[Atlas/Maps/Yearly/visualization |Visualization Yearly View]]



