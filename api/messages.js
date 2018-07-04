const Message = {
  select : {
    in : function(cb){
      if(chrome.tabs){//runs only outside of content script
        chrome.runtime.onMessage.addListener(
          function(request, sender, sendResponse) {
            if (request.action === "select"){
              cb(request.value);
            }
          });
      }else{
        chrome.runtime.onMessage.addListener(
          function(request, sender, sendResponse) {
            if (request.action === "select"){
              cb(request.value);
            }
          });
      }
    },
    out : function(val){
      if(val && typeof(val) != "string"){
        throw new Error("bad parameter it has to be a string");
      }
      if(chrome.tabs){//runs only outside of content script
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {action: "select", value: val});
        });
      }else{
        chrome.runtime.sendMessage({action: "select", value: val});
      }
    }
  }
}
