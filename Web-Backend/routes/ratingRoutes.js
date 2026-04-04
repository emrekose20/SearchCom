const express = require("express");
const router = express.Router();
const ratingController = require("../controllers/ratingController");

router.post("/", ratingController.createRating);
router.get("/user/:userId", ratingController.getMyRatings);
router.put("/:id", ratingController.updateRating);

module.exports = router;