module.exports = function(app, passport, chef) {
  var multer = require("multer");
  var upload = multer({ dest: "public/images" });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/");
  }

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/login", function(req, res) {
    res.render("login");
  });

  app.get("/chefprofile", isLoggedIn, function(req, res) {
    if (req.isAuthenticated()) {
      chef
        .findOne({
          where: {
            email: req.user.email
          }
        })
        .then(function(chefData) {
          if (chefData) {
            console.log(req.user);
            res.render("chefprofile", {
              msg: "Welcome",
              image: chefData.linkToImage.slice(6),
              firstname: chefData.firstname,
              lastname: chefData.lastname,
              email: chefData.email,
              username: req.user.firstname + " " + req.user.lastname,
              isLoggedIn: true,
              notLoggedIn: false
            });
          } else {
            res.render("chefprofile", {
              msg: "Welcome",
              image: "#",
              username: req.user.email,
              isLoggedIn: true,
              notLoggedIn: false
            });
          }
        });
    } else {
      res.redirect("/");
    }
  });

  app.get("/logout", function(req, res) {
    req.session.destroy(function(err) {
      if (err) {
        throw err;
      }
      res.redirect("/");
    });
  });

  app.post(
    "/signup",
    upload.fields([
      { name: "image", maxCount: 1 },
      { name: "doc", maxCount: 1 }
    ]),
    passport.authenticate("local-signup", {
      successRedirect: "/chefprofile",
      failureRedirect: "/"
    })
  );

  app.post(
    "/login",
    passport.authenticate("local-signin", {
      successRedirect: "/chefprofile",
      failureRedirect: "/login"
    })
  );
};