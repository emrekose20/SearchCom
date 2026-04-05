const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favoriteController");

router.post("/", favoriteController.createFavorite);
router.get("/:userId", favoriteController.getFavoritesByUser);
router.delete("/:id", favoriteController.deleteFavorite);

module.exports = router;