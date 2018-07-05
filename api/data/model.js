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
let ig = (function(){
  function ig(init){
    let list = [];
    this = Object.assign(this,init);

    this.sync = function(){
      chrome.storage.sync.set({ig: {list}});
    }
    this.isConflict = function(obj){
      return list.find((x)=>x.name === obj.name || x.path === obj.path)
    }
    this.add = function(name , path , domain){
      return new Promise((ok,notok)=>{
        if(list.find((x)=>x.name === name || x.path === path)){
          notok();
          return
        }
        list.push({name,path,domain});
        this.sync();
        ok();
      })
    }
  }
  return ig;
}());
function(init){

}
let sg = [];
