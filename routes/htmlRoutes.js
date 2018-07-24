var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      if (req.isAuthenticated()) {
        res.render("index", {
          msg: "Welcome",
          username: req.user.email,
          isLoggedIn: true,
          notLoggedIn: false
        });
      } else {
        res.render("index", {
          isLoggedIn: false,
          notLoggedIn: true
        });
      }
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
