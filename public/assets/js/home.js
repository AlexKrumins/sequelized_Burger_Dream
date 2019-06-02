$(function() {
  $(".change-devour").on("click", function(event) {
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

  $(".baku-delete").on("click", function(event) {
    var currentPost = $(this)
      .parent()
      .parent()
      .data("post");
    deletePost(currentPost.id);
  
    $.ajax({
      method: "DELETE",
      url: "/api/posts/" + id
    })
      .then(function() {
        location.reload();
      });
  });
});
