module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    // Post title is required, null is not allowed
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // Post body is required, null is not allowed
    body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // photolink will point to the thumbnail
    photolink: {
      type: DataTypes.STRING
    },

    date: {
      type: DataTypes.STRING,
    },

    menulink: {
      type: DataTypes.STRING
    },

    numberofGuests: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true
      }
    },

    priceRange: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: true,
      }
    },

    rules: {
      type: DataTypes.STRING
    }

  });
  // Associate a post with a Chef
  Post.associate = function(models) {
    Post.belongsTo(models.Chef, {
      foreignKey: {
        allowNull: false
      }
    });
  };
    return Post;
};