const sequelize = require("../config/db");

const User = require("./User");
const Establishment = require("./Establishment");
const Rating = require("./Rating");
const Comment = require("./Comment");
const Favorite = require("./Favorite");
const FavoriteFolder = require("./FavoriteFolder");

module.exports = {
  sequelize,
  User,
  Establishment,
  Rating,
  Comment,
  Favorite,
  FavoriteFolder
};