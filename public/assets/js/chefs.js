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
      });
    } else {
      alert("Please give your chef a really dreamy name.")
    }
  });

  $(".fired").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("chef_id");
    $.ajax({
      method: "DELETE",
      url: "/api/chefs/" + id
    }).then(
      function() {
        location.reload();
    });
  })
});
 