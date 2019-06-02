// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers", function(req, res) {
    var query = {};
    if (req.query.chef_id) {
      query.ChefId = req.query.chef_id;
    }
    db.Burger.findAll({
      where: query,
      include: [db.Chef]
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // POST route for saving a new burger
  app.post("/api/burgers", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  // DELETE route for deleting burgers. We can get the id of the burger to be deleted from
  // req.params.id
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });

  });

  // PUT route for updating burgers. We can get the updated burger data from req.body
  app.put("/api/burgers", function(req, res) {
    db.Burger.update(
      req.body,
      {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

};
