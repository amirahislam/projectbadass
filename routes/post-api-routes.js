// Requiring our models
var db = require("../models");

module.exports = function(app) {
  // Retrieve the list of all posts
  app.get("/api/posts", function(req, res) {

    // If the request is specifying a particular chef
    var query = {};
    if (req.query.chef_id) {
      query.ChefId = req.query.chef_id;
    }

    // Add a join here to include all of the chefs to these posts
    db.Post.findAll({
      where: query,
      order: [["votes", "DESC"]],
      include: [db.Chef]
    }).then(function(dbPost) {
      res.json(dbPost);
    })
  });

  // Retrieve a specific post by postid
  app.get("/api/posts/:id", function(req, res) {

    // Add a join here to include the Chef who wrote the Post
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Chef]
    }).then(function(dbPost) {

      // Check if the post is null, i.e no such post
      if (dbPost === null) {
        // Return an empty object
        res.json({});
      } else {
        // Return existing post data
        res.json(dbPost);
      }
    })
  });

  // Create a new post
  app.post("/api/posts", function(req, res) {

    db.Post.create(req.body)
    .then(function(dbPost) {
      res.json(dbPost);
    })
  });

  // Delete a specific post by postid
  app.delete("/api/posts/:id", function(req, res) {

    db.Post.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPost) {
      res.json(dbPost);
    })
  });

  // Update a specific post by postid
  app.put("/api/posts/:id", function(req, res) {

    db.Post.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function(dbPost) {
        res.json(dbPost);
      })
  });
};