var reloadPeople = function() {
  // run ajax request to refresh action
  $.get('people/refresh', function(data) {
    // data is the contents of the rendered partial from controller
    console.log(data);
    // use .html() to replace the html inside the tbody with id peopletbody
    $("#peopletbody").html(data);
    setTimeout(reloadPeople, 10000);
  });
};
var ready = function() {
  // setting timer to realod with function above
  setTimeout(reloadPeople, 10000);
  // reloading on click of refresh link
  $("#refresh").on('click', reloadPeople);
};

// document ready call the ready function
$(document).ready(ready);
// this is a dumb thing like document ready when you have turbolinks
$(document).on('page:load', ready);
