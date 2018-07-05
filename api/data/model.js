/*
  [
    {
      name: "example",
      path: "html>body>div>textarea",
      domain: "localhost"
    }
  ]
*/
/*
- add
- update name, path
- delete
*/
let ig = function(init){
  this = Object.assign(this,init);
  this.list = [];

  this.sync = function(){
    chrome.storage.sync.set({ig: {list: this.list}});
  }
  this.isConflict = function(obj){
    return this.list.find((x)=>x.name === obj.name || x.path === obj.path
  }
  this.add = function(name , path , domain){
    return new Promise((ok,notok)=>{
      if(this.list.find((x)=>x.name === name || x.path === path)){
        notok();
        return
      }
      this.list.push({name,path,domain});
      this.sync();
      ok();
    })
  }
}
let sg = [];
