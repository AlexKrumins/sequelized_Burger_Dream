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

  app.get("/create/:id?", function(req, res) {
    db.Chef.findAll({})
      .then(function (dbChef) {
        var hbsObject = {
          chefs: dbChef,
        }
        res.render("create", hbsObject);
      });
  });

  app.get("/menu", function(req, res) {
    db.Burger.findAll({})
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
