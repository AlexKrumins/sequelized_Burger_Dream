$(document).ready(function() {

  $(document).on("click", ".change-devour", function() {
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

  $(document).on("click", ".baku-delete", function() {
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
