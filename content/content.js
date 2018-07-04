

Message.select.in(()=>select((ss)=>Message.select.out(ss)));

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     if (request.action === "select"){
//       select(sendResponse)
//       console.log("ACTION IS: ", request.action);
//     }
//   });
// select(()=>chrome.runtime.sendMessage({action: "select", value: superSelector}));
