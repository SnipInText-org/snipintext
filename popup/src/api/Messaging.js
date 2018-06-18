export default{
  action: {
    select: function () {
      console.log("action.select");
      return new Promise(function(ok,notok){
        chrome.runtime.sendMessage({action: "select"}, function(response) {
          ok(response);
        });
      });
    }
  },
  listen: {}
};
