// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  
  app.get("/", function(req, res) {
    db.Burger.findAll({})
    .then(function (dbBurger) {
      console.log(dbBurger);
      var hbsObject = {
        burgers: dbBurger
      };
      res.render("burgers", hbsObject);
    });
  });

  // cms route loads cms.html
  app.get("/create", function(req, res) {
    db.Chef.findAll({})
      .then(function (dbChef) {
        var hbsObject = {
          chefs: dbChef
        }
        res.render("create", hbsObject);
      });
  });

  // blog route loads blog.html
  app.get("/menu", function(req, res) {
    db.Burger.findAll({})
    .then(function (dbBurger) {
      var hbsObject = {
        burgers: dbBurger
      };
      res.render("burgers", hbsObject);
    });
  });

  // authors route loads author-manager.html
  app.get("/chefs", function(req, res) {
    db.Chef.findAll({})
    .then(function (dbChef) {
      console.log(dbChef);
      var hbsObject = {
        chefs: dbChef
      };
      res.render("chefs", hbsObject);
    });
  });

};
