module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
        
      },
      lastname: {
        type: DataTypes.STRING
        
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Users;
  };
  