// var db = require("./index.js");

// Clear out the database and subsequently populate it with test data
module.exports = function(db){
// db.sequelize.sync({force: true}).then(function() {
    // Create a set of test chefs
    
    // db.Chef.findById(1)
    db.Chef.create([
        {
            "name": "Travis",
            // "id": "111",
            "email": "travismargetts@gmail.com",
            "photoLink": "https://pbs.twimg.com/profile_images/839900475205955585/FMzXSOkV_400x400.jpg",
            "about": "I am a chef."
        },
        {
            "name": "Amirah",
            // "id": "222",
            "email": "amirah@gmail.com",
            "photoLink": "https://vignette.wikia.nocookie.net/muppets/images/1/10/Zoe.jpg/revision/latest?cb=20111213182515&path-prefix=es",
            "about": "I am another chef."
        },

        {
            "name": "Stuart",
            // "id": "333",
            "email": "stuart@gmail.com",
            "photoLink": "https://vignette.wikia.nocookie.net/muppet/images/b/b5/Fozzie2.jpg/revision/latest?cb=20120410231906",
            "about": "I am a better chef."
        },
        {
            "name": "David",
            // "id": "444",
            "email": "david@gmail.com",
            "photoLink": "https://pbs.twimg.com/profile_images/588820366841159682/7Goc4cho_400x400.jpg",
            "about": "I am the best chef."
        },
        {
            "name": "Erin",
            // "id": "555",
            "email": "erin@gmail.com",
            "photoLink": "https://pbs.twimg.com/profile_images/716986458406424576/8AOacOOQ_400x400.jpg",
            "about": "I am the best chef ever"
        }
    ])
    // { individualHooks:true })
    .then(function() {
       console.log(response);
    })
    .catch(function(error) {
       console.log(error);
    });

    // Create a set of test posts
    db.Post.create([
        {
            "title": "Chefs Table",
            "body": "This table has really good food.",
            "votes": "10",
            "Chefid": "111",
            "photoLink": "https://media.cntraveler.com/photos/57c445b265e6586e551da52a/4:3/w_480,c_limit/Chef-Passard-netflix-cr-courtesy.jpg"
        },
        {
            "title": "Pastry Party",
            "body": "Yummy pastrys",
            "votes": "20",
            "Chefid": "222",
            "photoLink": "https://media.cntraveler.com/photos/57c445b265e6586e551da52a/4:3/w_480,c_limit/Chef-Passard-netflix-cr-courtesy.jpg"
        },
        {
            "title": "Chef's Room",
            "body": "This room has food.",
            "votes": "30",
            "Chefid": "333",
            "photoLink": "https://media.cntraveler.com/photos/57c445b265e6586e551da52a/4:3/w_480,c_limit/Chef-Passard-netflix-cr-courtesy.jpg"
        },
        {
            "title": "Food and Fun",
            "body": "There is food and fun",
            "votes": "35",
            "Chefid": "444",
            "photoLink": "https://media.cntraveler.com/photos/57c445b265e6586e551da52a/4:3/w_480,c_limit/Chef-Passard-netflix-cr-courtesy.jpg"
        },
        {
            "title": "Chef's Table2.0",
            "body": "Another great table",
            "votes": "10",
            "Chefid": "111",
            "photoLink": "https://media.cntraveler.com/photos/57c445b265e6586e551da52a/4:3/w_480,c_limit/Chef-Passard-netflix-cr-courtesy.jpg"
        },
        {
            "title": "Pastry Party2.0",
            "body": "More pastry",
            "votes": "20",
            "Chefid": "222",
            "photoLink": "https://media.cntraveler.com/photos/57c445b265e6586e551da52a/4:3/w_480,c_limit/Chef-Passard-netflix-cr-courtesy.jpg"
        },
        {
            "title": "Chef's Room2.0",
            "body": "This room has more food and fun",
            "votes": "30",
            "Chefid": "333",
            "photoLink": "https://media.cntraveler.com/photos/57c445b265e6586e551da52a/4:3/w_480,c_limit/Chef-Passard-netflix-cr-courtesy.jpg"
        },
        {
            "title": "Food and Fun2.0",
            "body": "More food and fun",
            "votes": "35",
            "Chefid": "444",
            "photoLink": "https://media.cntraveler.com/photos/57c445b265e6586e551da52a/4:3/w_480,c_limit/Chef-Passard-netflix-cr-courtesy.jpg"
        }
    ],
    { individualHooks: true })
    .then(function(response) {
       console.log(response);
    })
    .catch(function(error) {
       console.log(error);
    });

    // Create a set of test favorite posts
    db.Favorite.create([
        {
            "postID": "3",
            "Chefid": "222"
        },
        {
            "postID": "3",
            "Chefid": "111"
        },
        {
            "postID": "5",
            "Chefid": "111"
        },
        {
            "postID": "6",
            "Chefid": "333"
        },
        {
            "postID": "1",
            "Chefid": "222"
        },
        {
            "postID": "2",
            "Chefid": "444"
        }
    ],
    { individualHooks:true })
    .then(function(response) {
       console.log(response);
    })
    .catch(function(error) {
       console.log(error);
    });
// });
}