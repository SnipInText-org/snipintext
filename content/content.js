
function select() {
  return new Promise((ok,notok)=>{
    console.log("SELECTING");
    let $area = $("textarea");
    $area.addClass("selectorator");
    $area.click((e) => {
      $area.removeClass("selectorator");//don't highlight :hover
      $area.off("click");
      let superSelector = $(e.target)
          .parents()
          .map(function () {
              let ids = this.id ? (this.id.split(" ").length > 1 ? "" : "#" + this.id.split(" ")[0]) : "";//more than one id is invalid
              let classes = $(this).attr("class") ? "." + $(this).attr("class").split(" ").join(".") : "";//select all classes and join them in selector string
              return this.tagName + ids + classes;
          })
          .get()
          .reverse()
          .join(">") + ">" + e.target.nodeName;
      ok(superSelector);
    });
  });
}

Message.select.in()
  .then(()=>select())
  .then((ss)=>Ig.add("test 1 long name 3",ss,"localhost"))
  .catch((e)=>console.error("What the fuck: \n",e));

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if (request.action === "select"){
//       select(sendResponse)
//       console.log("ACTION IS: ", request.action);
//     }
//   });
// select(()=>chrome.runtime.sendMessage({action: "select", value: superSelector}));
