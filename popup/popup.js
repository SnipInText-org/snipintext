document.getElementById("selectorator").onclick = function(e){
  console.log("sending the message");
  console.log("TESTING: ", chrome.power);
  Message.select.out();
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   chrome.tabs.sendMessage(tabs[0].id, {action: "select"}, function(response) {
  //     console.log("selected: ", response);
  //   });
  // });
}
