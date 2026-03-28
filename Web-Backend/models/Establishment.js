const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
 
const Establishment = sequelize.define("Establishment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: "establishments"
});
 
module.exports = Establishment;