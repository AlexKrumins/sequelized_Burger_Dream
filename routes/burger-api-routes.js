var db = require("../models");

module.exports = function(app) {

  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({
      include: [db.Chef]
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.post("/api/burgers", function(req, res) {
    db.Burger.create(req.body)
      .then(function(dbBurger) {
        res.json(dbBurger);
      });
  });

  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.put("/api/burgers/:id", function(req, res) {
    db.Burger.update({
      devoured: req.body.devoured,
      },{
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

};
