module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      
      post: {
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
        },
      
    });
    return Post;
  };
  