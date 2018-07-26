require("dotenv").config();
var express = require("express");
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// For Passport
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/authRoutes")(app, passport);
require("./routes/chef-api-routes")(app);
require("./routes/post-api-routes")(app);
//load passport strategies
require("./config/passport/passport.js")(passport, db.user);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function() {
  require("./erin_test.js")(db);
  require("./travis_test.js")(db);
  app.listen(PORT, function(err) {
    if (err) {
      throw err;
    }
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

console.log("I hope this works");

module.exports = app;