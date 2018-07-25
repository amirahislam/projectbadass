var express = require("express");
var passport = require("passport");
var session = require("express-session");
var bodyParser = require("body-parser");
var path = require("path");
// var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

var insertData = require("./schema.js")(db);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// For Passport
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );

// Routes
<<<<<<< HEAD
require("./routes/chef-api-routes.js")(app);  //double check
require("./routes/post-api-routes.js")(app); //double check
require("./routes/invite-api-routes.js")(app);
require("./routes/htmlroutes.js")(app);
=======
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
require("./routes/authRoutes")(app, passport);
//load passport strategies
require("./config/passport/passport.js")(passport, db.user);
>>>>>>> 4cac3177412b20327eed02385f1c8a05b4839cec

app.use(express.static(__dirname + '/public'));

// Starting the server, syncing our models ------------------------------------/
<<<<<<< HEAD
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
=======
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function(err) {
    if (err) {
      throw err;
    }
>>>>>>> 4cac3177412b20327eed02385f1c8a05b4839cec
    console.log(
      "Supperclub app server is listening on PORT " + PORT);
  });
});
<<<<<<< HEAD
=======

console.log("I hope this works");

module.exports = app;
>>>>>>> 4cac3177412b20327eed02385f1c8a05b4839cec
