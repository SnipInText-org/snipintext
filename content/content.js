
function select() {
  console.log("selecting");
  let $area = $("textarea");
  return new Promise((ok,notok)=>{
    $area.addClass("selectorator");
    $("body").click((e) => {
      let superSelector = undefined;
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
    .then((ss)=>{
      console.log("selected!!!");
      if(ss){
        inAreaConsole(ss,"введи имя для этого поля: ")
          .then((input)=>{
            console.log("ENTERED: "+"|"+input+"|");
        });
      }
      inSelect(++n)
    })
    .catch((e)=>console.error("What the fuck: \n",e));
}
inSelect(0);
