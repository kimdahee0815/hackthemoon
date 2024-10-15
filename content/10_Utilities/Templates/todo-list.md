---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.file.title %>
type: todolist
tags:
  - daily-routine
  - todolist
aliases: 
todoList: 
---
# Todo-list

```button
name Check Your Calendar Today
type command
action Google Calendar: List gCal Events
color blue
```
^button-Google Calendar

<%* app.commands.executeCommandById('Google Calendar: Insert gCal Events') -%>

```button
name Manage Google Calendar
type command
action Google Calendar: Open gCal Web View
color green
```
^button-button-Google Calendar Web

## Todo-list









```dataviewjs
const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Todo-List/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.todoList = dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").todoList;
});				

```
### Todo-list References
[[content/2_Routine/3_Monthly/Overview/todoList|TodoList Monthly View]]
[[content/2_Routine/4_Yearly/Overview/todoList|TodoList Yearly View]]

##### Todo-list NOT completed!
```tasks
	not done
	status.type is not CANCELLED
	created before <% tp.file.title %>
	group by due
	sort by priority
	sort by due
	sort by scheduled
```




