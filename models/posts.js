module.exports = function(sequelize, DataTypes) {
    var Blogs = sequelize.define("Blogs", {
      
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
        name: {
          type: DataTypes.STRING,
          allowNull: false
         },
         lastname: {
          type: DataTypes.STRING,
          allowNull: false
         },
         post_bio: {
          type: DataTypes.STRING,
          allowNull: false
          }
      
      
    });
    return Blogs;
  };
  