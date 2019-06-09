$(document).ready(function() {
  var url = window.location.search;
  var burgerId;
  var chefId
  
  $(function() {
    
    if (url.indexOf("?burger_id=") !== -1) {
      burgerId = url.split("=")[1];
      getBurger(burgerId, "post");
    }
    else if (url.indexOf("?chef_id=") !== -1) {
      chefId = url.split("=")[1];
    }
    
    $(".change-devour").on("click", function() {
      event.preventDefault();
      
      var burger_id = $(this).data("burger_id");
      var changeState = $(this).data("changestate");
      var newState = {
        id: burger_id,
        devoured: changeState
      };
      $.ajax({
        method: "PUT",
        url: "/api/burgers/" + burger_id,
        data: newState
      }).then(
        function() {
          location.reload();
        });
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
});