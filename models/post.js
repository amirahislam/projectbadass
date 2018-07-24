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
    // Post votes will default to zero for a new post
    votes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    // photolink will point to the thumbnail
    photolink: {
      type: DataTypes.STRING,
    }
  },
  // Associate a post with a chef
  {
    classMethods: {
      associate: function(models) {
        // A Chef (foreignKey) is required or a Post can't be made
        Post.belongsTo(models.Chef, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Post;
};