document.getElementById("selectorator").onclick = function(e){
  Message.select.out();
  Message.select.in((res)=>console.log(res));
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   chrome.tabs.sendMessage(tabs[0].id, {action: "select"}, function(response) {
  //     console.log("selected: ", response);
  //   });
  // });
}
