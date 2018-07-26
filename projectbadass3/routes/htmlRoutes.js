var db = require("../models");
// var op = db.sequelize.Operaters;

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
        res.render("chefprofile", {
          msg: "Welcome",
          username: req.user.email,
          isLoggedIn: true,
          notLoggedIn: false,
          posts: data,
          helpers: { concat: concat }
        });
      } else {
        res.render("chefprofile", {
          isLoggedIn: false,
          notLoggedIn: true,
          posts: data,
          helpers: { concat: concat }
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
