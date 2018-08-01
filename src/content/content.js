
function select() {
  console.log("selecting");

  return new Promise((ok,notok)=>{
    let $area = $("textarea");
    $area.addClass("selectorator");

    $("body").click((e) => {
      let superSelector = undefined;
      console.log("Selected:",e.target.tagName.toLowerCase());
      if(e.target.tagName.toLowerCase() == "textarea"){
        superSelector = $(e.target)
          .parents()
          .map(function () {
              let ids = this.id ? (this.id.split(" ").length > 1 ? "" : "#" + this.id.split(" ")[0]) : "";//more than one id is invalid
              let classes = $(this).attr("class") ? "." + $(this).attr("class").split(" ").join(".") : "";//select all classes and join them in selector string
              return this.tagName + ids + classes;
          })
          .get()
          .reverse()
          .join(">") + ">" + e.target.nodeName;
      }
      $area.removeClass("selectorator");//don't highlight :hover
      $("body").off("click");
      ok(superSelector);
    });
  });
}



/*
// TODO:
check for the path
 enter the name
  validate the name
*/

function inSelect(n){
  console.log("лютый пиздец:",n);
  Message.select.in()
    .then(select)
    .then((path)=>{
      console.log("selected!!");
      if(path){
        console.log("textarea!");

        inAreaConsole(path,"введи имя для этого поля: ")
            .then((input)=>{
              const pack = {name: input, path, domain:"localhostality"};
              console.log("ENTERED: "+"|"+input+"|");
              Ig.merge(pack)
                .catch((err)=>{
                  console.log(err);
                  Ig.add(input,path,"localhost");
                  console.log("the element is uploaded");
                });
            })
          .catch((err)=>console.error(err));
      }
      console.log("Selection finished!");
      inSelect(++n)
    })
    .catch((e)=>console.error("What the fuck: \n",e));
}
inSelect(0);
