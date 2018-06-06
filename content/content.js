// chrome.runtime.onMessage.addListener(
// 	function(request, sender, sendResponse) {
//   });
let area = $("textarea");

function select(){
	$("textarea").addClass("selector");
	$("textarea").click((e)=>{
		area.removeClass("selector");
		area.off("click");
		let parentlist = $( e.target ).parents()
			.map(function() {
				console.log(this);
				console.log("CLASS:",$(this).attr("class"));
				let ids = this.id ? (this.id.split(" ").length > 1 ? "" : "#"+this.id.split(" ")[0]) : "";//more than one id is invalid
				let classes = $(this).attr("class") ? "."+$(this).attr("class").split(" ").join(".") : "";//select all classes and join them in selector string
				return this.tagName + ids + classes;
			})
			.get()
			.reverse()
			.join( ">" );
		console.log(e.target.nodeName);
		$(parentlist+">"+e.target.nodeName).val("WOW!");
		// console.log($("body>div>span>div>div").val("SHIT"));
		console.log(parentlist);
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
