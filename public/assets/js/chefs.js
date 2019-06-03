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

  $(".fired").on("click", function(event) {
    event.preventDefault();

    var tableItemData = $(this).parent("td").parent("tr").data("author");
    var id = tableItemData.id;
    console.log(id);
    $.ajax({
      method: "DELETE",
      url: "/api/authors/" + id
    }).then(
      function() {
        location.reload();
      }
    );
  })
});
 