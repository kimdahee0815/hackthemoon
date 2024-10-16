---
created-date: <% tp.date.now("YYYY-MM-DD h:mm:ss a") %>
date: <% tp.date.now("YYYY-MM-DD") %>
type: youtube
tags:
  - youtube
aliases: 
youtuber: "{{VALUE:Youtuber}}"
channelName: "{{VALUE:YoutubeChannel}}"
link: "{{VALUE:YoutubeLink}}"
img: 
---
# [[<% tp.file.title %>]]

<%* let youtubeLink = tp.frontmatter.link; let id = youtubeLink.slice(youtubeLink.indexOf("=")+1);  
if(id.indexOf("&")!==-1){
 id = id.slice(0, id.indexOf("&"));
}
let youtubeId = `https://www.youtube.com/embed/${id}`
let youtuber = tp.frontmatter.youtuber; -%>
```dataviewjs
let youtubeLink = dv.current().file.frontmatter.link;
let id = youtubeLink.slice(youtubeLink.indexOf("=")+1);  
if(id.indexOf("&")!==-1){
 id = id.slice(0, id.indexOf("&"));
}
let youtubeId = `https://www.youtube.com/embed/${id}`;
await dv.el("div", "", { cls: "container-root" });
const container = document.querySelectorAll('.container-root')[0];
container.innerHTML = `<iframe width="560" height="315" src="${youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
await dv.el("div", container);

const file = this.app.vault.getAbstractFileByPath("content/3_Learning/<% tp.file.title %>.md");

await this.app.fileManager.processFrontMatter(file, (fm) => {
fm.img = `https://img.youtube.com/vi/${id}/0.jpg`
fm.link = `https://www.youtube.com/watch?v=${id}`
});				
```















### Youtube Reference
##### Youtube Report
[[content/3_Learning/Report/Youtube/<% tp.file.title %>|<% tp.file.title %> Report]]

<% await tp.file.move("content/3_Learning/"+tp.file.title) %>