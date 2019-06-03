// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
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
        res.render("index", hbsObject);
      });
  });

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // blog route loads blog.html
  app.get("/menu", function(req, res) {
    db.Burger.findAll({})
    .then(function (dbBurger) {
      if (!dbBurger.length) {
        window.location.href = "/chefs";
      }
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
      res.render("chefs", hbsObject);
    });
  });

};
