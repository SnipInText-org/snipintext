"use strict";
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
  const dispatch = function(){
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
      chrome.storage.sync.get(['ig'],function(res){
        prevList = list;
        list = res.ig || [];

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
  this.merge = function(obj){//TODO count DOMAIN
    return new Promise((ok,notok)=>{
      this.download()
      .then(()=>{
        let i = list.findIndex((x)=>x.name === obj.name || x.path === obj.path);
        if(i == -1){
          notok(new Error(`no ig with such name [${obj.name}] or path [${obj.path}] (nothing to update)`));
        }else{
          list[i].name = obj.name;
          list[i].path = obj.path;
          list[i].domain = obj.domain;
          this.upload();
          ok();
        }
      });
    })
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

/*
[
  {
    name: "group number one"
    snippets: [
      {
        abbr:"tp-link",
        snipp: "телефон Горячей линии Tp-link: вы-кто-такие-идите-нахуй..."
        tags: ["роутеры","смс","tp-link"]
      },
    ]
  },
  ...
]
*/

let sg = new function(){
  let list = [];
  let subscribers = [];//subscribers to storage change
  const storageName = "sg";
  const dispatch = function(){
    if(prevList !== list){
      prevList = list;
      subscribers.forEach(subscriber=>subscriber());
    }
  }
//mask class and validators
  const mask = function(){
    let groupName, abbr, snipp, tags;
    const rightLength = function(str , min = 3 , max = 20){
      return !(str.length < min || str.length > max);
    }
    this.setGroupName = function(input){
      if(typeof(input) === "string"){
        groupName = input;
        return this;
      }else{
        throw new Error("setGroupName only acceps a string. your input:"+typeof(input));
      }
    }
    this.setAbbr = function(input){
      if(typeof(input) === "string"){
        abbr = input;
        return this;
      }else{
        throw new Error("setAbbr only acceps a string. your input:"+typeof(input));
      }
    }
    this.setSnipp = function(input){
      if(typeof(input) === "string"){
        snipp = input;
        return this;
      }else{
        throw new Error("setSnipp only acceps a string. your input:"+typeof(input));
      }
    }
    this.setTags = function(input){
      if(input instanceof Array){
        if(input.findIndex((x)=>typeof(x) !== "string") === -1){//each element have to be string
          tags = input;
          return this;
        }else
          throw new Error("setTags only acceps an array containing only strings. your input:" + input.map((x)=>typeof(x)).join(" , ") );
      }else
        throw new Error("setTags only acceps an array. your input:"+typeof(input));
    }

  }
//mask class getters
  this.getMask = function(){
    return mask;
  }
  this.isMaskValid = function(input){
    return input instanceof mask;
  }

  this.subscribe = function(subscriber){
    subscribers.push(subscriber);
  }
  this.upload = function(){
    return new Promise((ok,notok)=>{
      chrome.storage.sync.set({[storageName]: list}, function(){
        dispatch();
        ok();
      });
    });
  }
  this.download = function(){//TODO add .then
    return new Promise((ok,notok)=>{
      chrome.storage.sync.get([storageName],function(res){
        list = res.[storageName] || [];
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
  this.merge = function(obj){//TODO count DOMAIN
    return new Promise((ok,notok)=>{
      this.download()
      .then(()=>{
        let i = list.findIndex((x)=>x.name === obj.name || x.path === obj.path);
        if(i == -1){
          notok(new Error(`no ig with such name [${obj.name}] or path [${obj.path}] (nothing to update)`));
        }else{
          list[i].name = obj.name;
          list[i].path = obj.path;
          list[i].domain = obj.domain;
          this.upload();
          ok();
        }
      });
    })
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
