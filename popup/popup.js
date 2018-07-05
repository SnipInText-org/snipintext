let ig = new Ig([]);
console.log("IG: ", ig.get().join("||"));
Message.select.in((path)=>{console.log("IG: ", ig.get()); console.log(path); ig.add("testing", path, "localhost").catch((err)=>console.error("this element is already taken: ",err))});

document.getElementById("selectorator").onclick = function(e){
  Message.select.out();
}
