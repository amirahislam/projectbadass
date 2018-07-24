module.exports = function(sequelize, DataTypes) {
    var Invite = sequelize.define("Invite", {
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
      }
      },
  
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
      }
      },
      // Post body is required, null is not allowed
      email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true,
        validate: {
        isEmail: true,
      }
      },
      // photolink will point to the thumbnail
      phonenumber: {
          type: DataTypes.STRING,
          validate: {
          isNumeric: true
        }
      }
    });
    // Associate a post with a User
    Invite.associate = function(models) {
      Invite.belongsTo(models.Post, {
        foreignKey: {
          allowNull: false
        }
      });
    };
      return Invite;
  };
