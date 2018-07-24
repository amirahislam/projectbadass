// Requiring our models
var db = require("../models");

module.exports = function(app) {
  // Retrieve a list of all the favorites
  app.get("/api/favorites", function(req, res) {

    // If the request is specifying a particular chef
    var query = {};
    if (req.query.chef) {
      query.Chefid = req.query.chef;
    }

    // Add a join here to include all of the Chefs to these favorites
    db.Favorite.findAll({
      where: query,
      include: [db.Chef]
    })
    .then(function(dbPost) {
      res.json(dbPost);
    })
  });

  // Retrieve a specific favorite by favoriteID
  app.get("/api/favorites/:id", function(req, res) {

    // Add a join here to include the Chef who wrote the Post
    db.Favorite.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Chef]
    }).then(function(dbPost) {

      // Check if the favorite is null, i.e no such favorite
      if (dbPost === null) {
        // Return an empty object
        res.json({});
      } else {
        // Return existing favorite data
        res.json(dbPost);
      }
    })
  });

  // Create a new favorite
  app.post("/api/favorites", function(req, res) {

    db.Favorite.create(req.body)
    .then(function(dbPost) {
      res.json(dbPost);
    })
  });

  // Depete a specific favorite by favoriteID
  app.delete("/api/favorites/:id", function(req, res) {

    db.Favorite.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    })
  });
};