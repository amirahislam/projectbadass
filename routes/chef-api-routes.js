// Requiring our models
var db = require("../models");

module.exports = function(app) {
  // Retrieve the list of all chefs
  app.get("/api/chefs", function(req, res) {

    // Add a join to include all of each Chef's Posts
    db.Chef.findAll({ include: [db.Post] })
    .then(function(dbChef) {
      res.json(dbChef);
    })
  });

  // Retrieve a specific chef by id
  app.get("/api/chefs/:id", function(req, res) {

    // Add a join to include all of the Chef's Posts here
    db.Chef.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    })
    .then(function(dbChef) {

      // Check if the chef is null, i.e no such chef
      if (dbChef === null) {
        // Return an empty object
        res.json({});
      } else {
        // Return existing chef data
        res.json(dbChef);
      }
    })
  });

  // Create a new chef entry
  app.post("/api/chefs", function(req, res) {

    db.Chef.create(req.body).then(function(dbChef) {
      res.json(dbChef);
    });
  });

  // Update a specific chef entry by id
  app.put("/api/chefs/:id", function(req, res) {

    db.Chef.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function(dbPost) {
        res.json(dbPost);
      })
  });

  // Delete a specific chef by id
  app.delete("/api/chefs/:id", function(req, res) {

    db.Chef.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbChef) {
      res.json(dbChef);
    })
  });
};