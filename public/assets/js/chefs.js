$(function() {

  $(".chef-form").on("submit", function(event) {
    event.preventDefault();

    var newChef = {
      name: $("#chef-name").val().trim(),
    };
    if (newChef.name !== "") {
      $.ajax("/api/chefs", {
        type: "POST",
        data: newChef
      }).then(
        function() {
          location.reload();
        }
      );
    } else {
      alert("Please give your chef a really dreamy name.")
    }
  });
});
 