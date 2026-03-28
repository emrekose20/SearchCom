const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const FavoriteFolder = sequelize.define("FavoriteFolder", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  folderName: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "favorite_folders"
});

module.exports = FavoriteFolder;