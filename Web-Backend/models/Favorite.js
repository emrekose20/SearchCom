const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Favorite = sequelize.define("Favorite", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  establishmentId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  folderId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: "favorites"
});

module.exports = Favorite;