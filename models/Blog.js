const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create Blog model and datatypes, including the user_id foreign key.
class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
    comment: {
      type: DataTypes.STRING,
    },
    commentAuthorId: {
      type: DataTypes.INTEGER,
      references: {
        model:"user",
        key: "id",
      }
    },
    date_comment_created: {
      type: DataTypes.DATE,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Blog",
  }
);

module.exports = Blog;
