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
  app.get("/create", function(req, res) {
    res.render("create");
  });

  // blog route loads blog.html
  app.get("/menu", function(req, res) {
    if (url.indexOf("?chef_id") !== -1) {
      chef_id = url.split
    }
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
