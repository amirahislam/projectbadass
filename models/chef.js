module.exports = function(sequelize, Sequelize) {
  var Chef = sequelize.define("Chef", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    firstname: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    lastname: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    username: {
      type: Sequelize.TEXT
    },

    about: {
      type: Sequelize.TEXT
    },

    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },

    linkToImage: {
      type: Sequelize.STRING
    },

    twitterLink: {
      type: Sequelize.STRING
    },

    instagramLink: {
      type: Sequelize.STRING
    },

    docImage: {
      type: Sequelize.STRING
    }
  });

  Chef.associate = function(models) {
    // Associate Chef with Posts
    // When a Chef is deleted, also delete any associated Posts
    Chef.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Chef;
};
