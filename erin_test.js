var data = require("./postData.js");

// Clear out the database and subsequently populate it with test data
module.exports = function(db) {
  db.sequelize.sync({ force: true }).then(function() {
    // Create a set of test posts
    data.forEach(function(d) {
      db.Post.create(d)
        .then(function() {
          //console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    });
  });
};
