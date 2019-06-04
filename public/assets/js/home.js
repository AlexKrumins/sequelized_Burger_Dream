$(function() {

  $(".change-devour").on("click", function() {
    event.preventDefault();
    
    var id = $(this).data("burger_id");
    console.log(id);
    var changeState = $(this).data("changestate");
    var newState = {
      devoured: changeState
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".baku-delete").on("click", function(event) {
    event.preventDefault();
    
    var id = $(this).data("burger_id");
    console.log(id);
    $.ajax({
      method: "DELETE",
      url: "/api/burgers/" + id
    }).then(
      function() {
        location.reload();
      });
  });
});
