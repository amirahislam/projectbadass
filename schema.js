// var db = require("./index.js");

// Clear out the database and subsequently populate it with test data
module.exports = function(db){
db.sequelize.sync({force: true}).then(function() {
    // Create a set of test chefs
    
    // db.Chef.findById(1)
    db.Chef.create(
        {
            "name": "Travis",
            // "id": "111",
            "email": "travismargetts@gmail.com",
            "photoLink": "https://pbs.twimg.com/profile_images/839900475205955585/FMzXSOkV_400x400.jpg",
            "about": "I am a chef."
        }
    ).then(function() {
       console.log(response);
    })
    .catch(function(error) {
       console.log(error);
    });

    // Create a set of test posts
    db.Post.create(
        {
            "title": "Chefs Table",
            "body": "This table has really good food.",
            "votes": "10",
            "Chefid": "111",
            "photoLink": "https://media.cntraveler.com/photos/57c445b265e6586e551da52a/4:3/w_480,c_limit/Chef-Passard-netflix-cr-courtesy.jpg"
        }
    ).then(function(response) {
       console.log(response);
    })
    .catch(function(error) {
       console.log(error);
    });

    // Create a set of test favorite posts
    db.Favorite.create(
        {
            "postid": "3",
            "Chefid": "222"
        }
    ).then(function(response) {
       console.log(response);
    })
    .catch(function(error) {
       console.log(error);
    });
});
}