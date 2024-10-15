``` todoist 
name: To-do list Overdue
filter: "overdue" 
sorting: [date, priority] 
group: true 
```

```todoist 
name: To-do list This week
filter: "due before: <% tp.date.weekday("MM/DD/YYYY", 7) %>" 
sorting: [date, priority] 
group: true 
```


```todoist 
name: To-do list Today
filter: "<% tp.file.title %>" 
sorting: [date, priority] 
group: true 
```

%% 
not done
	status.type is not CANCELLED
	created before <% tp.file.title %>
	group by function task.file.filenameWithoutExtension
	sort by priority
	sort by due
	sort by scheduled
	%%