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
var Ig = new function(){
  let prevList = [];
  let list = [];
  let subscribers = [];//subscribers to storage change
  let dispatch = function(){
    subscribers.forEach(subscriber=>subscriber());
  }

  // chrome.storage.sync.set({ig: []});
  this.subscribe = function(subscriber){
    subscribers.push(subscriber);
  }
  this.upload = function(){
    return new Promise((ok,notok)=>{
      chrome.storage.sync.set({ig: list}, function(){
        if(prevList !== list)
          dispatch();
        ok();
      });
    });
  }
  this.download = function(){//TODO add .then
    return new Promise((ok,notok)=>{
      chrome.storage.sync.get(['ig',"шоугодно"],function(res){
        prevList = list;
        list = res.ig;

        if(prevList !== list)
          dispatch();

        ok();
      })
    })
  }
  this.devastate = function(){
    list = [];
    return new Promise((ok, notok)=>{
      this.upload();
      ok();
    })
  }
  this.isObj = function(obj){
    return obj.name && obj.path && (Object.getOwnPropertyName(obj).length === 2 || Object.getOwnPropertyName(obj).length === 3 && obj.domain)
  }
  this.add = function(name , path , domain){
    return new Promise((ok,notok)=>{
      this.download()
        .then(()=>{
          if(list.find((x)=>x.name === name || x.path === path)){
            notok(new Error("this name or path is borrowed"));
            return
          }
          list.push({name,path,domain});
          this.upload().then(ok);
        });
    })
  }
  this.get = function(){
    return list;
  }
  this.update = function(obj){//TODO count DOMAIN
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
  this.download();
};

let sg = [];
