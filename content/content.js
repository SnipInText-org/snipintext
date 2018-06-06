// chrome.runtime.onMessage.addListener(
// 	function(request, sender, sendResponse) {
//   });
let area = $("textarea");

function select(){
	$("textarea").addClass("selector");
	$("textarea").click((e)=>{
		console.log(e.target).val();
		e.target.val("anything you wanned");
		area.removeClass("selector");
		areas.off("click");
		var rightArrowParents = [],
			elm,
			entry;

		for (elm = this; elm; elm = elm.parentNode) {
			entry = elm.tagName.toLowerCase();
			if (entry === "html") {
				break;
			}
			if (elm.className) {
				entry += "." + elm.className.replace(/ /g, ".");
			}
			rightArrowParents.push(entry);
		}
		rightArrowParents.reverse();
		console.log(rightArrowParents.join(" "));
		return false;
	});
}
select();
// loop();
// if(request.act === "select element"){
// }
// console.log(sender.tab ?
// 	"from a content script:" + sender.tab.url :
// 	"from the extension");
// if (request.greeting == "hello")
// 	sendResponse({farewell: "goodbye"});
