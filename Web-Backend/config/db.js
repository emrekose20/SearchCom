const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("searchcom_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

module.exports = sequelize;
