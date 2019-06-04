$(function() {

  $(".change-devour").on("click", function() {
    var id = $(this).data("id");
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

  $(".baku-delete").on("click", function() {
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + id
    })
      .then(function() {
        location.reload();
      });
  });
});
