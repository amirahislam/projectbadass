//load bcrypt
var bCrypt = require("bcrypt-nodejs");

module.exports = function(passport, user, chef) {
  var User = user;
  var Chef = chef;
  var LocalStrategy = require("passport-local").Strategy;

  function getChefData(email, req) {
    var img = req.files.image[0];
    var doc = req.files.doc[0];
    return {
      email: email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      linkToImage: img.path,
      twitterLink: req.body.twitter,
      instagramLink: req.body.instagram,
      about: req.body.about,
      docImage: doc.path
    };
  }

  function getUserData(email, userPassword, req) {
    return {
      email: email,
      password: userPassword,
      firstname: req.body.firstname,
      lastname: req.body.lastname
    };
  }

  //serialize
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // deserialize user
  passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

  // Method of signup
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done) {
        var generateHash = function(password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        User.findOne({
          where: {
            email: email
          }
        }).then(function(user) {
          if (user) {
            return done(null, false, {
              message: "That email is already taken"
            });
          } else {
            var userPassword = generateHash(password);

            var userData = getUserData(email, userPassword, req);

            var chefData = getChefData(email, req);

            // Save user login info into User table
            User.create(userData)
              .then(function(newUser) {
                if (newUser) {
                  // Save chef detail info into Chef table
                  Chef.create(chefData)
                    .then(function(newChef) {
                      if (!newChef) {
                        return done(null, false);
                      }
                    })
                    .catch(function(err) {
                      console.log("Error:", err);
                      return done(null, false, {
                        message: "Something went wrong with your Signup"
                      });
                    });
                  return done(null, newUser);
                } else {
                  return done(null, false);
                }
              })
              .catch(function(err) {
                console.log("Error:", err);
                return done(null, false, {
                  message: "Something went wrong with your Signup"
                });
              });
          }
        });
      }
    )
  );

  //LOCAL SIGNIN
  passport.use(
    "local-signin",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with email
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done) {
        var User = user;
        var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };

        User.findOne({
          where: {
            email: email
          }
        })
          .then(function(user) {
            if (!user) {
              return done(null, false, {
                message: "Email does not exist"
              });
            }

            if (!isValidPassword(user.password, password)) {
              return done(null, false, {
                message: "Incorrect password."
              });
            }

            var userinfo = user.get();
            return done(null, userinfo);
          })
          .catch(function(err) {
            console.log("Error:", err);
            return done(null, false, {
              message: "Something went wrong with your Signin"
            });
          });
      }
    )
  );
};
