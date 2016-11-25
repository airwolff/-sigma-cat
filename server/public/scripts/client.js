$(document).ready(function() {
  console.log('up and running!');

  getCats();

  function getCats() {
    $.ajax({
      type: 'GET',
      url: '/cats',
      success: function(data) {
        console.log('got the cat data!');
        appendCats(data);
      }
    });
  }

  function appendCats(cats) {
    $("#catBox").empty();

    for (var i = 0; i < cats.length; i++) {
      $("#catBox").append('<div><h2>' + cats[i].catName + '</h2><p>' + cats[i].temperment + '</p></div>');
    }

  }

  $("#catForm").on("submit", postCat);

  function postCat(cat) {
    event.preventDefault();
    var newCat = {};

    $.each($('#catForm').serializeArray(), function(i, field) {
      newCat[field.name] = field.value;
    });

    console.log(newCat);

    $.ajax({
      type: 'POST',
      url: '/cats',
      data: newCat,
      success: function(data) {
        getCats();
      }
    });
  }
});
