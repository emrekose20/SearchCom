const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/", commentController.createComment);
router.get("/user/:userId", commentController.getMyComments);
router.get("/establishment/:name", commentController.getCommentsByEstablishment);
router.delete("/:id", commentController.deleteComment);

module.exports = router;