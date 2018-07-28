var db = require("../models");

var concat = function(s1, s2) {
  return s1 + s2;
};

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Post.findAll({
      where: {
        postId: {
          $between: [1, 6]
        }
      },
      limit: 6
    }).then(function(data) {
      if (req.isAuthenticated()) {
        res.render("index", {
          msg: "Welcome",
          username: req.user.firstname + " " + req.user.lastname,
          isLoggedIn: true,
          notLoggedIn: false,
          posts: data,
          helpers: { concat: concat }
        });
      } else {
        res.render("index", {
          isLoggedIn: false,
          notLoggedIn: true,
          posts: data,
          helpers: { concat: concat }
        });
      }
    });
  });

  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
};
