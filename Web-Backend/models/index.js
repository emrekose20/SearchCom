const sequelize = require("../config/db");

const Rating = require("./Rating");
const Comment = require("./Comment");
const Favorite = require("./Favorite");
const FavoriteFolder = require("./FavoriteFolder");

module.exports = {
  sequelize,
  Rating,
  Comment,
  Favorite,
  FavoriteFolder
};