Ig.subscribe(function(){
  renderList();
  console.log(Ig.get().map((x)=>JSON.stringify(x)).join("||"));
});

const renderList = function(){
  $('#ig-list').empty();
  let $ig = $('#ig-list').append("<ul></ul>");

  Ig.get().forEach((x)=>{
    $ig.append(`<li>${x.name}</li>`);
  });
}
// TODO create pre naming for selected element
// TODO use tests !!! god dammit use fucking tests
