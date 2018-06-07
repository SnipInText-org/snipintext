// chrome.runtime.onMessage.addListener(
// 	function(request, sender, sendResponse) {
//   });
let $area = $("textarea");

function select() {
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
            .join(">");
        console.log(e.target.nodeName);
        $(superSelector + ">" + e.target.nodeName).val("<br>\n<br>\n");
console.log(superSelector);   });
}

select();console.log("LOADED");
// loop();
// if(request.act === "select element"){
// }
// console.log(sender.tab ?
// 	"from a content script:" + sender.tab.url :
// 	"from the extension");
// if (request.greeting == "hello")
// 	sendResponse({farewell: "goodbye"});
