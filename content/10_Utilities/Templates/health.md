---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.file.title %>
type: health
tags:
  - daily-routine
  - health
aliases: 
sleepStart: 
sleepEnd: 
sleepTime: 
makingBed:
eyeDrop:
brushHair: 
poop: 
period: 
probiotics: 
bodyScan: 
weight: 
omega3: 
vitaminB: 
vitaminD: 
pantotin: 
floss: 
eyeRelief: 
pleasure: 
---
# Face Status

## Eyes









### Eye-Drop









```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Health/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.eyeDrop = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").eyeDrop;
});				

```
#### Eye-drop References
[[content/2_Routine/3_Monthly/Overview/eyeDrop|Eye-Drop Monthly View]]
[[content/2_Routine/4_Yearly/Overview/eyeDrop|Eye-Drop Yearly View]]
### Eye-Relief









```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Health/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.eyeRelief = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").eyeRelief;
});				

```
#### Eye-Relief References
[[content/2_Routine/3_Monthly/Overview/eyeRelief|Eye-Relief Monthly View]]
[[content/2_Routine/4_Yearly/Overview/eyeRelief|Eye-Relief Yearly View]]

## Nose









### Nose References



## Ear









### Ear References



## Teeth








```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Health/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.floss = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").floss;
});				

```
### Teeth References
[[content/2_Routine/3_Monthly/Overview/floss|Floss Monthly View]]
[[content/2_Routine/4_Yearly/Overview/floss|Floss Yearly View]]


## Hair







```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Health/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.brushHair = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").brushHair;
});				

```

### Hair References
[[content/2_Routine/3_Monthly/Overview/brushHair|Brush-Hair Monthly View]]
[[content/2_Routine/4_Yearly/Overview/brushHair|Brush-Hair Yearly View]]

# Body Status









```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Health/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.bodyScan = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").bodyScan;
});				

```
### Body Scan References
[[content/2_Routine/3_Monthly/Overview/bodyScan|Body-Scan Monthly View]]
[[content/2_Routine/4_Yearly/Overview/bodyScan|Body-Scan Yearly View]]
## Sleep
```dataviewjs
let sleepDuration = dv.luxon.DateTime.now().set({hour: 0, minute: 0, second:0, millisecond:0 });

if(dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").sleepStart != undefined && dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").sleepEnd != undefined) {
const sleepStart = String(dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").sleepStart).replace(/ +(?= )/g, '').split(" ");

const sleepEnd = String(dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").sleepEnd).replace(/ +(?= )/g, '').split(" ");

let len = 0;
if(sleepStart.length >= sleepEnd.length){
	len = sleepStart.length;
}else{
	len = sleepEnd.length;
}

for(let i = 0; i < len; i++){
	let time2 = dv.luxon.DateTime.fromISO("<% tp.file.title %>" + "T" + sleepEnd[i]);

	let time1 = dv.luxon.DateTime.fromISO("<% tp.file.title %>" + "T" + sleepStart[i]);

	let timediff = time2.diff(time1, ["year", "month", "day", "hour", "minute"]);
	let result = timediff.toObject();
	sleepDuration = sleepDuration.plus(result);
}
}
const sleepTimeObj = sleepDuration.toObject();
const sleepTime = sleepTimeObj.hour + " hours, "+ sleepTimeObj.minute + " minutes";

dv.span(sleepTime);

const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Health/<% tp.file.title %>.md");


await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.sleepTime = sleepTime; 
fm.sleepStart = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").sleepStart;
fm.sleepEnd = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").sleepEnd;});
```







```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Health/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.makingBed = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").makingBed;
});				

```
### Sleep References
[[content/2_Routine/2_Weekly/sleep|Sleep Weekly View]]
[[content/2_Routine/3_Monthly/Overview/sleep|Sleep Monthly View]]
[[content/2_Routine/4_Yearly/Overview/sleep|Sleep Yearly View]]
## Weight









### Weight References
[[content/2_Routine/2_Weekly/weight|Weight Weekly View]]
[[content/2_Routine/3_Monthly/Overview/weight|Weight Monthly View]]
[[content/2_Routine/4_Yearly/Overview/weight|Weight Yearly View]]
## Pee








### Pee References


## Poop






```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Health/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.poop = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").poop;
});				

```
### Poop References
[[content/2_Routine/3_Monthly/Overview/poop|Poop Monthly View]]
[[content/2_Routine/4_Yearly/Overview/poop|Poop Yearly View]]
## Period







```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Health/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.period = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").period;
});				

```
### Period References
[[content/2_Routine/3_Monthly/Overview/period|Period Monthly View]]
[[content/2_Routine/4_Yearly/Overview/period|Period Yearly View]]
## Pleasure







```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Health/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.pleasure = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").pleasure;
});				

```
### Pleasure References
[[content/2_Routine/3_Monthly/Overview/pleasure|Pleasure Monthly View]]
[[content/2_Routine/4_Yearly/Overview/pleasure|Pleasure Yearly View]]
## Shower










### Shower References



# Supplements

## Probiotics





```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Health/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.probiotics = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").probiotics;
});				

```
### Probiotics References
[[content/2_Routine/3_Monthly/Overview/probiotics|Probiotics Monthly View]]
[[content/2_Routine/4_Yearly/Overview/probiotics|Probiotics Yearly View]]
## Omega3







```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Health/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.omega3 = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").omega3;
});				

```
### Omega3 References
[[content/2_Routine/3_Monthly/Overview/omega3|Omega3 Monthly View]]
[[content/2_Routine/4_Yearly/Overview/omega3|Omega3 Yearly View]]

## Pantotin







```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Health/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.pantotin = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").pantotin;
});				

```
### Pantotin References
[[content/2_Routine/3_Monthly/Overview/pantotin|Pantotin Monthly View]]
[[content/2_Routine/4_Yearly/Overview/pantotin|Pantotin Yearly View]]

## Vitamin D






```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Health/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.vitaminD = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").vitaminD;
});				

```
### Vitamin D References
[[content/2_Routine/3_Monthly/Overview/vitaminD|VitaminD Monthly View]]
[[content/2_Routine/4_Yearly/Overview/vitaminD|VitaminD Yearly View]]

## Vitamin B




```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Health/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.vitaminB = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").vitaminB;
});				

```
### Vitamin B References
[[content/2_Routine/3_Monthly/Overview/vitaminB|VitaminB Monthly View]]
[[content/2_Routine/4_Yearly/Overview/vitaminB|VitaminB Yearly View]]