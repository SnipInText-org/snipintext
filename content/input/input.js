const inAreaConsole = function(path,message){
  return new Promise((ok,notok)=>{
    let input = "";
    const prev = $(path);
    let curr = $(path);

    curr.val(message);
    curr.on("keydown",function(event){
      switch(event.which){
        case  8://don't erase the message
          if(curr.val().length <= message.length)
            event.preventDefault();
          break;
        case 13:
          break;
        case 27:
          curr.val(prev);
          curr.off("keydown");
          break;
      }
    });
    //exclude message
    //enter, esc
    ok(input);
  })
}
