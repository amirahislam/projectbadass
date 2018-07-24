var path = require("path");
var db = require("../models");

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/index.html"));
    db
    res.render("index", {
      msg: "Welcome!",
      
    })
  });


};