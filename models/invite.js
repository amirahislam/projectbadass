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
      
      email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true,
        validate: {
          isEmail: true
      }
      },
      
      phonenumber: {
          type: DataTypes.STRING,
          validate: {
            isNumeric: true
        }
      }
    });
    // Associate an invite with a post
    Invite.associate = function(models) {
      Invite.belongsTo(models.Post, {
        foreignKey: {
          allowNull: true    // can not be false, im probably doing everything wrong....
        }
      });
    };
      return Invite;
  };
