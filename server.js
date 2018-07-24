var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");

// db.Chef.create([
//   {
//       "name": "Travis",
//       "id": "111",
//       "email": "travismargetts@gmail.com",
//       "photoLink": "https://pbs.twimg.com/profile_images/839900475205955585/FMzXSOkV_400x400.jpg",
//       "about": "I am a chef."
//   },
// ])
var insertData = require("./schema.js")(db);

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Handlebars
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );

// Routes
require("./routes/chef-api-routes.js")(app);  //double check
require("./routes/post-api-routes.js")(app); //double check
require("./routes/favorites-api-routes.js")(app);
require("./routes/htmlroutes.js")(app);

app.use(express.static(__dirname + '/public'));

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(
      "Supperclub app server is listening on PORT " + PORT);
  });
});
