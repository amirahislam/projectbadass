var path = require("path");
var db = require("../models");

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res) {
<<<<<<< HEAD
    // res.sendFile(path.join(__dirname, "../public/index.html"));
  });


};
=======
    db.Example.findAll({}).then(function() {
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
>>>>>>> 4cac3177412b20327eed02385f1c8a05b4839cec
