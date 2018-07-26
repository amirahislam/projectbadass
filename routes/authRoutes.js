module.exports = function(app, passport) {
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
      res.render("chefprofile", {
        msg: "Welcome",
        username: req.user.email,
        isLoggedIn: true,
        notLoggedIn: false
      });
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
