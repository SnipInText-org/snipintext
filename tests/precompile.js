const fs = require("fs");
const {join} = require("path");

const path = join(__dirname,"../src");

function isDir(str){
  return str.search(/\./) === -1;
}
function isFile(str, ext="js"){
  return str.search(new RegExp("\."+ext)) !== -1;
}
function closure(code){

}
function readDir(readPath, writePath){
  const readPath = join(__dirname,dir);
  const writePath = join(__dirname,"/")

  fs.readdir(readPath, function(err, list){
    if(err)
      throw err;

    list.forEach((x)=>{
      const r = readPath+"/"+x;
      const w = writePath+"/"+x

      if(isFile(x)){
        fs.readFile(r, "utf8", function(err, content){
          if(err)
            throw err;
          else{
            closure(content)
              .then((newFile)=>{
                fs.writeFile(w, newFile, (err)=>throw err);
              });
          }
        })
      }
      else if(isDir(x)){
        readDir(r,w);
      }
    });
  });
}


raddir(join(__dirname,"../src"),join(__dirname,"/src"));
