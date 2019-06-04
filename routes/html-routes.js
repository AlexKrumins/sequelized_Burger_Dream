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
        var hbsObject = {
          burgers: dbBurger
        };
        console.log(hbsObject)
        res.render("index", hbsObject);
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
      res.render("index", hbsObject);
    });
  });

  // authors route loads author-manager.html
  app.get("/chefs", function(req, res) {
    db.Chef.findAll({})
    .then(function (dbChef) {
      var hbsObject = {
        chefs: dbChef
      };
      console.log(dbChef)
      res.render("chefs", hbsObject);
    });
  });

};
