Ig.download().then(()=>Ig.get().map((x)=>JSON.stringify(x)).join("||"));

document.getElementById("selectoratorka").onclick = ()=>{console.log("click");Message.select.out()}
document.getElementById("clearList").onclick = ()=>{console.log("clear");Ig.devastate()}
