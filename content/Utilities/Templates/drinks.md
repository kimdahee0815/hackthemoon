---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.file.title %>
type: drinks
tags:
  - daily-routine
  - drinks
aliases: 
water: 
tea: 
coffee: 
---
# Drinks

## Water
```dataviewjs
let waterAmountLog = undefined;

if(dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").waterAmountLog != undefined) {
	waterAmountLog = String(dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").waterAmountLog).replace(/ +(?= )/g, '').split(" ");

for(let i = 0; i < waterAmountLog.length; i++){
	water += Number(waterAmountLog[i]);
}
}

dv.span("Total Water : " + water + "ml");

```








### Water References
[[content/2_Routine/2_Weekly/water|Water Weekly View]]
[[content/2_Routine/3_Monthly/Overview/water|Water Monthly View]]
[[content/2_Routine/4_Yearly/Overview/water|Water Yearly View]]
## Tea 







```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Drinks/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.tea = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").tea;
});				

```
### Tea References
[[content/2_Routine/3_Monthly/Overview/tea|Tea Monthly View]]
[[content/2_Routine/4_Yearly/Overview/tea|Tea Yearly View]]


## Coffee









```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Drinks/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.coffee = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").coffee;
});				

```
### Coffee References
[[content/2_Routine/3_Monthly/Overview/coffee|Coffee Monthly View]]
[[content/2_Routine/4_Yearly/Overview/coffee|Coffee Yearly View]]