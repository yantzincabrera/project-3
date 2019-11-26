module.exports = function(sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
      post: {
        type: DataTypes.STRING,
        allowNull: false
        },
       name: {
        type: DataTypes.STRING,
        allowNull: false
       }
    });
    return Post;
  };
  