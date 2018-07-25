// var db = require("./index.js");

// Clear out the database and subsequently populate it with test data
module.exports = function(db){
    db.sequelize.sync({force: true}).then(function() {
        // Create a set of test chefs
        

        db.Chef.create(
            {
                "firstname": "test",
                "lastname": "Margetts",
                "username": "tmargetts",
                "about": "I am a chef",
                "email": "travismargetts@gmail.com",
                "password": "password",
                "lastLogin": "20180101",
                "status": "active"
                
            }
        ).then(function(response) {
           //console.log(response);
        })
        .catch(function(error) {
           //console.log(error);
        });
    
        // Create a set of test posts
        db.Post.create(
            {
                "title": "Chefs Table",
                "body": "This table has really good food.",
                "photolink": "https://media.cntraveler.com/photos/57c445b265e6586e551da52a/4:3/w_480,c_limit/Chef-Passard-netflix-cr-courtesy.jpg",
                "date": "20180101",
                "menulink": "https://s3.envato.com/files/168511551/Preview%20Image%20Set/02_Restaurant%20Menu-01-01.jpg",
                "numberofGuests": "4",
                "priceRange": "25",
                "rules": "No food fighting."
            }
        ).then(function(response) {
           //console.log(response);
        })
        .catch(function(error) {
           //console.log(error);
        });
    
        // Create a set of test invitations submitted by visitors
        db.Invite.create(
            {
                "firstname": "Gordon",
                "lastname": "Ramsey",
                "email": "gordonramsey@hotmail.com",
                "phonenumber": "8885551234"
            }
        ).then(function(response) {
           console.log(response);
        })
        .catch(function(error) {
           console.log(error);
        });
    });
    };