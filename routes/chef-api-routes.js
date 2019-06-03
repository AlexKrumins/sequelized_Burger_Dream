var db = require("../models");

module.exports = function(app) {
  app.get("/api/chefs", function(req, res) {
    db.Chef.findAll({
      include: [db.Burger]
    }).then(function(dbChef) {
      res.json(dbChef);
    });
  });

  app.get("/api/chefs/:id", function(req, res) {
    db.Chef.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Burger]
    }).then(function(dbChef) {
      res.json(dbChef);
    });
  });

  app.post("/api/chefs", function(req, res) {
    db.Chef.create(req.body).then(function(dbChef) {
      res.json(dbChef);
    });
  });

  app.delete("/api/chefs/:id", function(req, res) {
    db.Chef.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbChef) {
      res.json(dbChef);
    });
  });

};
