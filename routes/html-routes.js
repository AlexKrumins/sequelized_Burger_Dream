var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Burger.findAll({
      include: [db.Chef]
    })
    .then(function (dbBurger, dbChef) {
      var hbsObject = {
        burgers: dbBurger,
        chefs: dbChef
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

  app.get("api/chefs", function(req, res) {
    db.Chef.findAll({
      include: [db.Burger]
    })
    .then(function(dbChef) {
      res.json(dbChef);
    });
  });

  app.get("api/burgers", function(req, res) {
    db.Burger.findAll({
      include: [db.Chef]
    })
    .then(function (dbBurger) {
      return res.json(dbBurger);
    });
  });

};
