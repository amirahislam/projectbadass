module.exports = function(sequelize, DataTypes) {
    var Favorite = sequelize.define("Favorite", {
      // postID identifies the starred post
      postid: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    // Associate a post with the Chef who liked it
    {
      classMethods: {
        associate: function(models) {
          // A Chef (foreignKey) is required or a favorite can't be recorded
          Favorite.belongsTo(models.Chef, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    });
  
    return Favorite;
  };