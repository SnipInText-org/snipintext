Ig.subscribe(function(){
  renderList();
  console.log(Ig.get().map((x)=>JSON.stringify(x)).join("||"));
})

const renderList = function(){
  $('#ig-list').empty();
  let $ig = $('#ig-list').append("<ul></ul>");
  const igList = Ig.get();

  igList.forEach((x)=>{
    $ig.append(`<li>${x.name}</li>`);
  });
}
