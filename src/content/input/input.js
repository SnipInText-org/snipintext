//TODO:
//add rules, add notifications
//add borders to protect the message

const inAreaConsole = function(path,message){
  return new Promise((ok,notok)=>{
    const prev = $(path).val();
    let $curr = $(path);

    $curr.val(message);
    $curr.on("keydown",function(event){
      switch(event.which){
        case  8://don't erase the message
          if($curr.val().length <= message.length)
            event.preventDefault();
          break;
        case 13:
          event.preventDefault();
          let input = $curr.val();
          ok(input.slice(message.length, input.length));
        case 27:
          notok();
          $curr.val(prev);
          $curr.off("keydown");
          break;
      }
    });
    //exclude message
    //enter, esc
  })
}
