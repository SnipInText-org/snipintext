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
- get
- update name, path
- delete
*/
var Ig = (function(){
  function ig(){
    let list = [];
    this.upload = function(){
      chrome.storage.upload({ig: list});
    }
    this.download = function(){//TODO add .then
      chrome.storage.sync.get(['ig'],function(res){
        list = res;
      })
    }
    this.download();
    this.isConflict = function(obj){
      this.download();
      return list.find((x)=>x.name === obj.name || x.path === obj.path)
    }
    this.isObj = function(obj){
      return obj.name && obj.path && (Object.getOwnPropertyName(obj).length === 2 || Object.getOwnPropertyName(obj).length === 3 && obj.domain)
    }
    this.add = function(name , path , domain){
      this.download();
      return new Promise((ok,notok)=>{
        if(list.find((x)=>x.name === name || x.path === path)){
          notok();
          return
        }
        list.push({name,path,domain});
        this.upload();
        ok();
      })
    }
    this.get = function(){
      this.download();
      return list;
    }
    this.update = function(obj){//TODO cout DOMAIN
      this.download();
      if(this.isObj(obj)){
        let i = list.findindex((x)=>x.name === obj.name || x.path === obj.path);
        if(!i){
          console.error(new Error(`ERROR in ig.update call: no ig with such name [${obj.name}] or path [${obj.path}] (nothing to update)`));
          return
        }
        list[i] = Object.assign(list[i],obj);
        this.upload();
      }else{
        console.error(new Error(`the input has to be {path , name} (domain is optional)`));
        return
      }
    }
    this.delete = function(obj){//TODO count DOMAIN
      this.download();
      if(this.isObj(obj)){
        let i;
        while(i = list.findIndex((x)=>x.name === obj.name || x.path === obj.path)){
          list.slice(i,1);
        }
        this.upload();
      }else{
        console.error(new Error(`the input has to be {path , name} (domain is optional)`));
        return
      }
    }
  }
  return ig;
}());

let sg = [];
