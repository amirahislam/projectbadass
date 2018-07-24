// Requiring our models
var db = require("../models");

module.exports = function(app) {
  // Retrieve a list of all the people who submitted invite to post
  app.get("/api/invites", function(req, res) {

    
    var query = {};
    if (req.query.post) {
      query.PostId = req.query.post_id;
    }

    // Add a join here to include all of the invites to a post
    db.Invite.findAll({
      where: query,
      include: [db.Post]
    })
    .then(function(dbInvite) {
      res.json(dbInvite);
    })
  });

  // Retrieve a specific submitted invitation by inviteID
  app.get("/api/invites/:id", function(req, res) {

    // Add a join here to locate a particular submitted Invite to a specific Post
    db.Invite.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbInvite) {

        // Return existing invite data
        res.json(dbInvite);
    })
  });

  // Create a new invitation
  app.post("/api/invites", function(req, res) {

    db.Invite.create(req.body)
    .then(function(dbInvite) {
      res.json(dbInvite);
    })
  });

  // Depete a specific invite by inviteID
  app.delete("/api/invites/:id", function(req, res) {

    db.Invite.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbInvite) {
      res.json(dbInvite);
    })
  });
};