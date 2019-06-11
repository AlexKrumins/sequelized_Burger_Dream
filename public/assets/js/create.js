var url = window.location.search;
var selectedChef = url.split("=")[1];
// $("select option[value='"+authorId+"']").attr("selected", "selected")
$(function() {

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bk").val().trim(),
      devoured: $("[name=eat]:checked").val().trim(),
      ChefId: $("#chef").val()
    };
    if (newBurger.burger_name !== "" && newBurger.ChefId !== "0") {
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
    } else {
      alert("Please give your dream burger a name and pick a chef.")
    }
  });
});
