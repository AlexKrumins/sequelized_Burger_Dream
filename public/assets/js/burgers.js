$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var changeState = $(this).data("changestate");
    console.log("changeState " + changeState)
    var newState = {
      devoured: changeState
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(
      function() {
        console.log("changed devoured state to", changeState);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bk").val().trim(),
      devoured: $("[name=eat]:checked").val().trim()
    };
    if (newBurger.burger_name !== "") {
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    } else {
      alert("Please give your dream burger a name.")
    }
  });
});
