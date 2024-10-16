---
createdDate: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: daily routine
tags:
  - daily-routine
aliases: 
cssclasses:
  - dashboard
  - daily
  - calendar
sticker: emoji//1f970
bodyScan: 
sleepTime: 0 hours, 0 minutes
makingBed: 
eyeDrop: 
brushHair: 
poop: 
period: 
water: 0
probiotics: 
stretching: 
reading: 
english: 
weight: 
breakfast: 
omega3: 
vitaminD: 
pantotin: 
morningSkincare: 
morningWashingDishes: 
morningCleaningHouse: 
tea: 
coffee: 
developing: 
snack: 
lunch: 
afternoonWashingDishes: 
eyeRelief: 
eveningCleaningHouse: 
dinner: 
floss: 
eveningWashingDishes: 
workout: 
waxing: 
facialMask: 
eveningSkincare: 
footCare: 
nailsCare: 
saving: 
obsidian: 
diary: 
gratitude: 
moodTracker: 
todoList: 
affirmation: 
visualization: 
meditation: 
arrangingDesk: 
pleasure: 
wantsNeeds: 
---

> ###### [[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>|⬅]] <% tp.file.title %> [[<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>|➡]]
> ##### 🔹 <% tp.date.now("dddd 🔹 MMMM Do 🔹 YYYY", 0, tp.file.title, "YYYY-MM-DD") %> 🔹

<%tp.web.daily_quote()%>

---
# TODAY'S OVERVIEW

* ## TODAY'S OVERVIEW
	* dailyOverviewNote:: [[Atlas/Maps/Daily/<% tp.file.title %>|Daily-Overview - <% tp.file.title %>]]

# MORNING ROUTINE
* ## BODY SCAN
	* bodyNote:: [[Calendar/Daily/Health/<% tp.file.title %>#Body Status|Body Scan - <% tp.file.title %>]]

* ## SLEEP
	* sleepStart:: 
	* sleepEnd:: 
	* sleepNote::  [[Calendar/Daily/Health/<% tp.file.title %>#Sleep|Sleep - <% tp.file.title %>]]
```dataviewjs
let sleepDuration = dv.luxon.DateTime.now().set({hour: 0, minute: 0, second:0, millisecond:0 });

if(dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").sleepStart != undefined && dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").sleepEnd != undefined) {
const sleepStart = String(dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").sleepStart).replace(/ +(?= )/g, '').split(" ");

const sleepEnd = String(dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").sleepEnd).replace(/ +(?= )/g, '').split(" ");

let len = 0;
if(sleepStart.length >= sleepEnd.length){
	len = sleepStart.length;
}else{
	len = sleepEnd.len
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

const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Daily-Routine/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {fm.sleepTime = sleepTime});
```
* ## EYE DROP
	* eyeNote::  [[Calendar/Daily/Health/<% tp.file.title %>#Eye-Drop|Eye-Drop - <% tp.file.title %>]]

* ## BRUSH HAIR
	* hairNote::  [[Calendar/Daily/Health/<% tp.file.title %>#Hair|Brush Hair - <% tp.file.title %>]]

* ## NATURE'S CALLING
	* peeNote::  [[Calendar/Daily/Health/<% tp.file.title %>#Pee|Pee - <% tp.file.title %>]]
	* poopNote::  [[Calendar/Daily/Health/<% tp.file.title %>#Poop|Poop - <% tp.file.title %>]]
	* periodNote::  [[Calendar/Daily/Health/<% tp.file.title %>#Period|Period - <% tp.file.title %>]]

* ## WATER
	* waterAmountLog:: 
	* waterNote::  [[Calendar/Daily/Drinks/<% tp.file.title %>#Water|Water - <% tp.file.title %>]]

```dataviewjs
let water = 0;

if(dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").waterAmountLog != undefined) {
const waterAmountLog = String(dv.page("Calendar/Daily/Daily-Routine/<% tp.file.title %>").waterAmountLog).replace(/ +(?= )/g, '').split(" ");

for(let i = 0; i < waterAmountLog.length; i++){
	water += Number(waterAmountLog[i]);
}
} 

const file = this.app.vault.getAbstractFileByPath("Calendar/Daily/Daily-Routine/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.water = water;
});
```

* ## PROBIOTICS
   ![[content/Utilities/Images/40896b93059a0adb5bee2b6c151013c8_MD5.jpg|200x200]]
	* probioticsNote::  [[Calendar/Daily/Health/<% tp.file.title %>#Probiotics|Probiotics - <% tp.file.title %>]]

* ## STRETCHING
   <iframe width="300" height="200" src="https://www.youtube.com/embed/6_LYz_XxD-g?si=t8k6c_V5Q7A53Ncs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
	* stretchingNote::  [[Calendar/Daily/Workout/<% tp.file.title %>#Stretching|Stretching - <% tp.file.title %>]]

* ## READING
	```dataview
	LIST  
	FROM "Atlas/Notes"
	where contains(tags,"book") and dateformat(file.mtime, "yyyy-MM-dd") = "<% tp.file.title %>"
	SORT date DESC 
	```

* ## ENGLISH
	```dataview
	LIST  
	FROM "Atlas/Notes"
	where contains(tags,"english") and dateformat(file.mtime, "yyyy-MM-dd") = "<% tp.file.title %>"
	SORT date DESC 
	```

* ## WEIGHT
	* weightNote:: [[Calendar/Daily/Health/<% tp.file.title %>#Weight|Weight - <% tp.file.title %>]]

* ## BREAKFAST
	* breakfastKind:: 
	* breakfastNote:: [[Calendar/Daily/Diet/<% tp.file.title %>#Breakfast|Breakfast - <% tp.file.title %>]]

* ## OMEGA 3
   ![[content/Utilities/Images/087eede2374bff4c4bd1ba306f130ee1_MD5.jpg|200x200]]
	* omega3Note::  [[Calendar/Daily/Health/<% tp.file.title %>#Omega3|Omega3 - <% tp.file.title %>]]  

* ## VITAMIN D
   ![[content/Utilities/Images/e851cb8b80f58cfd65df24d50a41d37d_MD5.jpg|200x200]]
	* vitaminDNote::  [[Calendar/Daily/Health/<% tp.file.title %>#Vitamin D|VitaminD - <% tp.file.title %>]]

* ## PANTOTIN
   ![[content/Utilities/Images/edba8ec93ec6f97e0de2f89f18097363_MD5.jpg|200x200]]
	* pantotinNote::  [[Calendar/Daily/Health/<% tp.file.title %>#Pantotin|Pantotin - <% tp.file.title %>]]

* ## MORNING SKIN CARE
   ![[content/Utilities/Images/feb5ef00dd5fcd2407877207fef5c8e2_MD5.jpg|300x200]]
	* skincareNote::  [[Calendar/Daily/Beauty/<% tp.file.title %>#Morning skincare|Morning Skincare - <% tp.file.title %>]]

* ## MORNING WASHING DISHES
	* washingDishesNote::  [[Calendar/Daily/Chores/<% tp.file.title %>#Washing Dishes|Washing Dishes - <% tp.file.title %>]]

* ## MORNING CLEANING HOUSE
	* cleaningHouseNote::  [[Calendar/Daily/Chores/<% tp.file.title %>#Cleaning House|Cleaning House - <% tp.file.title %>]]

# AFTERNOON ROUTINE

* ## TEA
	* drinksNote:: [[Calendar/Daily/Drinks/<% tp.file.title %>#Tea|Tea - <% tp.file.title %>]]

* ## COFFEE
	* drinksNote:: [[Calendar/Daily/Drinks/<% tp.file.title %>#Coffee|Coffee - <% tp.file.title %>]]

* ## DEVELOPING 
	```dataview
	LIST  
	FROM "Atlas/Notes"
	where contains(tags,"developing") and dateformat(file.mtime, "yyyy-MM-dd") = "<% tp.file.title %>"
	SORT date DESC 
	```

* ## LUNCH
	* lunchKind:: 
	* lunchNote::  [[Calendar/Daily/Diet/<% tp.file.title %>#Lunch|Lunch - <% tp.file.title %>]]

* ## AFTERNOON WASHING DISHES
	* washingDishesNote::  [[Calendar/Daily/Chores/<% tp.file.title %>#Washing Dishes|Washing Dishes - <% tp.file.title %>]]

* ## SNACK
	* snackKind:: 
	* snackNote::  [[Calendar/Daily/Diet/<% tp.file.title %>#Snack|Snack - <% tp.file.title %>]]

* ## EYE RELIEF
   ![[content/Utilities/Images/2702e279bc9cf76f49f83a113f4c2631_MD5.jpg|200x200]]
	* eyeReliefNote::  [[Calendar/Daily/Health/<% tp.file.title %>#Eye-Relief|Eye-Relief - <% tp.file.title %>]]

# EVENING ROUTINE

* ## EVENING CLEANING HOUSE
	* cleaningHouseNote::  [[Calendar/Daily/Chores/<% tp.file.title %>#Cleaning House|Cleaning House - <% tp.file.title %>]]

* ## DINNER
	* dinnerKind:: 
	* dinnerNote::  [[Calendar/Daily/Diet/<% tp.file.title %>#Dinner|Dinner - <% tp.file.title %>]]

* ## VITAMIN D
   ![[content/Utilities/Images/e851cb8b80f58cfd65df24d50a41d37d_MD5.jpg|200x200]]
	* vitaminDNote::  [[Calendar/Daily/Health/<% tp.file.title %>#Vitamin D|VitaminD - <% tp.file.title %>]]

* ## EVENING WASHING DISHES
	* washingDishesNote::  [[Calendar/Daily/Chores/<% tp.file.title %>#Washing Dishes|Washing Dishes - <% tp.file.title %>]]

* ## WORKOUT
   <iframe width="300" height="200" src="https://www.youtube.com/embed/Kymv9On2-VA?si=EG1IZbnTA6slh7Mw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <iframe width="300" height="200" src="https://www.youtube.com/embed/7TLk7pscICk?si=hyRC-kulC6y0qce_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <iframe width="300" height="200" src="https://www.youtube.com/embed/qnHBn2UXBbE?si=FczvZhPHgRz8sihj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <iframe width="300" height="200" src="https://www.youtube.com/embed/EojxzBZbo4o?si=DqusI29koOVRUCZx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <iframe width="300" height="200" src="https://www.youtube.com/embed/qN5aXr55GzU?si=jxuNH0XsouoNQEIB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <iframe width="300" height="200" src="https://www.youtube.com/embed/ieGVQp_eRFs?si=3pDNjRVtsQS0-VVe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <iframe width="300" height="200" src="https://www.youtube.com/embed/Af-vNOEkAIo?si=sRORtXgcszvv3sIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <iframe width="300" height="200" src="https://www.youtube.com/embed/ra0Nrnr2s6o?si=ERn0VLIcIwNIv2PX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <iframe width="300" height="200" src="https://www.youtube.com/embed/hgqSlNH_NYo?si=lH_FKaKMrmaQ6itJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
	* workoutNote:: [[Calendar/Daily/Workout/<% tp.file.title %>#Workout|Workout - <% tp.file.title %>]]

* ## WAXING
	* waxingNote::  [[Calendar/Daily/Beauty/<% tp.file.title %>#Waxing|Waxing - <% tp.file.title %>]]

* ## FACIAL MASK
   ![[content/Utilities/Images/1d4d77cacb03b5d3cba619fefec2e83e_MD5.jpg|200x200]]
	* facialMaskNote::  [[Calendar/Daily/Beauty/<% tp.file.title %>#Facial Mask|Facial Mask - <% tp.file.title %>]]

* ## EVENING SKIN CARE
   ![[content/Utilities/Images/3ff141780f620e7656642ca3ee0e0281_MD5.jpg|300x200]]
	* skincareNote::  [[Calendar/Daily/Beauty/<% tp.file.title %>#Evening Skincare|Evening Skincare - <% tp.file.title %>]]

* ## FOOT CARE
	* footcareNote::  [[Calendar/Daily/Beauty/<% tp.file.title %>#Feet|Foot Care - <% tp.file.title %>]]

* ## NAILS
	* nailsCareNote::  [[Calendar/Daily/Beauty/<% tp.file.title %>#Nails|Nails Care - <% tp.file.title %>]]

* ## SAVING
	* savingNote:: [[saving.ledger|Savings - <% tp.file.title %>]]

* ## OBSIDIAN
	```dataview
	LIST  
	rows.file.link
	where dateformat(file.mtime, "yyyy-MM-dd") = "<% tp.file.title %>" and file.path != "Calendar/Daily/Daily-Routine/<% tp.file.title %>.md"
	group by file.folder
	SORT date DESC 
	```

* ## DIARY & GRATITDUE & MOOD TRACKER
	* diaryNote::  [[Calendar/Daily/Diary/<% tp.file.title %>#Diary|Diary - <% tp.file.title %>]]

* ## TO-DO LIST
	* todolistNote:: [[Calendar/Daily/Todo-List/<% tp.file.title %>#Todo-List|Todo-List - <% tp.file.title %>]]

* ## AFFIRMATION & VISUALIZATION & MEDITATION
    <iframe width="300" height="200" src="https://www.youtube.com/embed/xeul9fEvo-Q?si=xYZMIOVTNdAxjOt9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
	* dreamNote:: [[Calendar/Daily/Dreams/<% tp.file.title %>#Dreams|Dreams - <% tp.file.title %>]]
	* meditationNote::  [[Calendar/Daily/Meditation/<% tp.file.title %>|Meditation - <% tp.file.title %>]]

* ## ARRANGING DESK
	* arrangingDeskNote:: [[Calendar/Daily/Chores/<% tp.file.title %>#Arranging Desk|Arranging Desk - <% tp.file.title %>]]

* ## PLEASURE
	* pleasureNote:: [[Calendar/Daily/Health/<% tp.file.title %>#Pleasure|Pleasure - <% tp.file.title %>]]

* ## WANTS / NEEDS
	* wantsNeedsNote:: [[Calendar/Daily/Wants-Needs/<% tp.file.title %>|Wants & Needs - <% tp.file.title %>]]








