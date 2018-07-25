module.exports = function(app, passport) {
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/signin");
  }

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/signin", function(req, res) {
    res.render("signin");
  });

  app.get("/chefprofile", isLoggedIn, function(req, res) {
    res.render("chefprofile");
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
    passport.authenticate("local-signup", {
      successRedirect: "/chefprofile",
      failureRedirect: "/"
    })
  );

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/chefprofile",
      failureRedirect: "/signin"
    })
  );
};
