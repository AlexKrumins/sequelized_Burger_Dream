var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Burger.findAll({})
    .then(function (dbBurger) {
      var hbsObject = {
        burgers: dbBurger
      };
      res.render("burgers", hbsObject);
    });
  });

  app.get("/", function(req, res) {
    db.Burger.findAll({})
    .then(function (dbBurger) {
      var hbsObject = {
        burgers: dbBurger
      };
      res.render("burgers", hbsObject);
    });
  });

  app.get("/create/:chef_id?", function(req, res) {
    db.Chef.findAll({})
      .then(function (dbChef) {
        var hbsObject = {
          chefs: dbChef,
        }
        res.render("create", hbsObject);
      });
  });

  app.get("/menu/:chef_id?", function(req, res) {
    var whereCondition = {};
    if(req.params.chef_id){
      whereCondition = {
        ChefId: req.params.chef_id
      }
    }
    db.Burger.findAll({
      where: whereCondition,
      include: [db.Chef]
    })
    .then(function (dbBurger) {
      var hbsObject = {
        burgers: dbBurger
      };
      res.render("burgers", hbsObject);
    });
  });

  app.get("/chefs", function(req, res) {
    db.Chef.findAll({})
    .then(function (dbChef) {
      var hbsObject = {
        chefs: dbChef
      };
      res.render("chefs", hbsObject);
    });
  });

};
