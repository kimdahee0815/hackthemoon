---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.file.title %>
type: wantsNeeds
tags:
  - daily-routine
  - wants
  - needs
aliases:
wantsNeeds: 
---
# Wants








# Needs







### Wants/Needs References
[[content/2_Routine/3_Monthly/Overview/wantsNeeds|WantsNeeds Monthly View]]
[[content/2_Routine/4_Yearly/Overview/wantsNeeds|WantsNeeds Yearly View]]
```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Wants-Needs/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.wantsNeeds = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").wantsNeeds;
});				

```

