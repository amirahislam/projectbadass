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
<<<<<<< HEAD
      type: DataTypes.STRING,
=======
      type: DataTypes.STRING
>>>>>>> e9ceb48219c707a830b356679833822e54c1a5e5
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
<<<<<<< HEAD
        isNumeric: true,
=======
        isNumeric: true
>>>>>>> e9ceb48219c707a830b356679833822e54c1a5e5
      }
    },

    rules: {
      type: DataTypes.STRING
    }
<<<<<<< HEAD

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
=======
  });
  // Associate a post with a Chef
  //   Post.associate = function(models) {
  //     Post.belongsTo(models.Chef, {
  //       foreignKey: {
  //         allowNull: false
  //       }
  //     });
  //   };
  return Post;
};
>>>>>>> e9ceb48219c707a830b356679833822e54c1a5e5
