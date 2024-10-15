---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.file.title %>
type: skin
tags:
  - daily-routine
  - beauty
aliases: 
morningSkincare: 
eveningSkincare: 
facialMask: 
waxing: 
footCare: 
hairCare: 
nailsCare: 
---
# Skin

## Morning Skincare







```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Beauty/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.morningSkincare = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").morningSkincare;
});				

```
### Morning Skincare References
[[content/2_Routine/3_Monthly/Overview/morningSkincare|Morning-Skincare Monthly View]]
[[content/2_Routine/4_Yearly/Overview/morningSkincare|Morning-Skincare Yearly View]]

## Evening Skincare






```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Beauty/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.eveningSkincare = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").eveningSkincare;
});				

```
### Evening Skincare References
[[content/2_Routine/3_Monthly/Overview/eveningSkincare|Evening-Skincare Monthly View]]
[[content/2_Routine/4_Yearly/Overview/eveningSkincare|Evening-Skincare Yearly View]]
## Facial Mask









```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Beauty/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.facialMask = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").facialMask;
});				

```
### Facial Mask References
[[content/2_Routine/3_Monthly/Overview/facialMask|Facial-Mask Monthly View]]
[[content/2_Routine/4_Yearly/Overview/facialMask|Facial-Mask Yearly View]]

## Waxing







```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Beauty/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.waxing = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").waxing;
});				

```
### Waxing References
[[content/2_Routine/3_Monthly/Overview/waxing|Waxing Monthly View]]
[[content/2_Routine/4_Yearly/Overview/waxing|Waxing Yearly View]]
## Feet







```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Beauty/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.footCare = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").footCare;
});				

```
### Feet References
[[content/2_Routine/3_Monthly/Overview/footCare|Foot-Care Monthly View]]
[[content/2_Routine/4_Yearly/Overview/footCare|Foot-Care Yearly View]]
## Hair Care








```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Beauty/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.hairCare = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").hairCare;
});				

```
### Hair References
[[Atlas/Maps/Monthly/hairCare |Hair-Care Monthly View]]
[[hairCare|Hair-Care Yearly View]]
## Nails






```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Beauty/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.nailsCare = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").nailsCare;
});				

```
### Nails References
[[content/2_Routine/3_Monthly/Overview/nails|Nails Monthly View]]
[[content/2_Routine/4_Yearly/Overview/nails|Nails Yearly View]]