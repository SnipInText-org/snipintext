let $area = $("textarea");

function select(cb) {
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
    cb(superSelector);
  });
}
