var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Post.findAll({ limit: 6 }).then(function(data) {
      db.Example.findAll({}).then(function() {
        if (req.isAuthenticated()) {
          res.render("index", {
            msg: "Welcome",
            username: req.user.email,
            isLoggedIn: true,
            notLoggedIn: false,
            posts: postsData
          });
        } else {
          res.render("index", {
            isLoggedIn: false,
            notLoggedIn: true,
            posts: data
          });
        }
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
