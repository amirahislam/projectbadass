require("dotenv").config();
var express = require("express");
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;
var secretCode = process.env.secret || "keyboard cat";

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// app.use(fileUpload());

// For Passport
app.use(session({ secret: secretCode, resave: true, saveUninitialized: true })); // session secret
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
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/authRoutes")(app, passport, db.Chef);
require("./routes/post-api-routes")(app);
require("./routes/invite-api-routes")(app);
//load passport strategies
require("./config/passport/passport.js")(passport, db.user, db.Chef);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

//Render 404 page for any unmatched routes
app.get("*", function(req, res) {
  res.render("404");
});

// moment().format('MMMM Do YYYY, h:mm:ss a');
// Starting the server, syncing our models ------------------------------------/

db.sequelize.sync().then(function() {
  require("./erin_test.js")(db);  
  // require("./invite_test.js")(db);

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

// console.log("I hope this works");

// module.exports = app;
