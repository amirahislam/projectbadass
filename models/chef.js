module.exports = function(sequelize, DataTypes) {
  var Chef = sequelize.define("Chef", {
    // Chef name is required, null is not allowed
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // Chef email is required and must be unique
    email: {
      type: DataTypes.STRING,
      allowNull: false, 
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    // Chef photo and about entries are not required
    photoLink: DataTypes.STRING,
    about: DataTypes.STRING
  });
  // Associate a Chef with posts and favorites
    Chef.associate = function(models) {
        // Associate Chef with Posts
        // When a Chef is deleted, also delete any associated Posts
        Chef.hasMany(models.Post, {
          onDelete: "cascade",
          // foreignKey: {
          //   name: "chefid"
          // }
        });
        // Associate Chef with Favorites
        // When a Chef is deleted, do not delete the Favorites as they may be other chefs' posts
        Chef.hasMany(models.Favorite, {
          onDelete: "cascade",
          // foreignKey: {
          //   name: "chefid"
          // }
        });

      };

  return Chef;
};