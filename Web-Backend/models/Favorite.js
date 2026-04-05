const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    establishmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Establishment",
      required: true
    },
    folderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FavoriteFolder",
      default: null
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Favorite", favoriteSchema);