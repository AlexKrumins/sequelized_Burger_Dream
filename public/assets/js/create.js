$(document).ready(function() {

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bk").val().trim(),
      devoured: $("[name=eat]:checked").val().trim(),
      ChefId: $("#chef").val()
    };
    console.log(newBurger.ChefId);
    if (newBurger.burger_name !== "") {
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    } else {
      alert("Please give your dream burger a name.")
    }
  });
});
