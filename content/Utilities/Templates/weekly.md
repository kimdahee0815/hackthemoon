---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: weekly
tags:
  - weekly-routine
aliases:
---
# THIS WEEK REPORT
```toggl
SUMMARY FROM <% moment(tp.file.title, 'YYYY-ww[W]').startOf('week').format("YYYY-MM-DD") %> TO <% moment(tp.file.title, 'YYYY-ww[W]').endOf('week').format("YYYY-MM-DD") %>
INCLUDE PROJECTS  "Work", "English", "Reading", "Developing", "Obsidian", "Event", "Entertainment", "WebSurfing"
TITLE "THIS WEEK REPORT"
```
```toggl
list
FROM <% moment(tp.file.title, 'YYYY-ww[W]').startOf('week').format("YYYY-MM-DD") %> TO <% moment(tp.file.title, 'YYYY-ww[W]').endOf('week').format("YYYY-MM-DD") %>
INCLUDE PROJECTS  "Work", "English", "Reading", "Developing", "Obsidian", "Event", "Entertainment", "WebSurfing"
group by project
```
# THIS WEEK'S TODO-LIST
```dataviewjs
var sow = "<% moment(tp.file.title, 'YYYY-ww[W]').startOf('week').format("YYYY-MM-DD") %>"; 
var eow = "<% moment(tp.file.title, 'YYYY-ww[W]').endOf('week').format("YYYY-MM-DD") %>"; 
const tasks = dv.pages('"thoughts/action/daily/routine"')
	.where(p =>{
		return (dv.date(p.file.name) >= dv.date(sow) && dv.date(p.file.name) <= dv.date(eow));
	})
	.file.tasks.filter(t => !t.completed)
	.sort(t => dv.date(dv.page(t.link.path).file.name), "asc")
	.groupBy(t => dv.date(dv.page(t.link.path).file.name))
	;

if(tasks.length === 0) {
	dv.el("b", "All done ;-)")
} else {
	dv.taskList(tasks);
}
```

# EDIT TODO-LIST
```dataviewjs
var sow = "<% moment(tp.file.title, 'YYYY-ww[W]').startOf('week').format("YYYY-MM-DD") %>"; 
var eow = "<% moment(tp.file.title, 'YYYY-ww[W]').endOf('week').format("YYYY-MM-DD") %>"; 
const query = `
not done
NOT (path includes utils)
sort by urgency
group by function task.due.format("YYYY %%MM%% MMMM [<mark style='background: var(--color-base-00); color: var(--color-base-40)'>- Week</mark>] WW", "Undated") 
group by function task.due.format("[%%]YYYY-MM-DD[%%]dddd [<mark style='background: var(--color-base-00); color: var(--color-base-40);'>](YYYY-MM-DD)[</mark>]")
hide task count
`;
dv.paragraph('```tasks\n' + query + '\n```');
```

## <font color="#ffc000">What is worth remembering about this week?</font>


## <font color="#ffff00">What did I accomplish this week?</font>


## <font color="#92d050">What could I have done better this week?</font>


## <font color="#00b050">What am I grateful for this week, and what am I thinking of?</font>


## <font color="#00b0f0">What did I set to achieve this week?</font>


## <font color="#a372f7">What do I want to achieve next week?</font>


### Weekly Reference

