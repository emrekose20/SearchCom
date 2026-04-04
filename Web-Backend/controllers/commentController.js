const { Comment } = require("../models");

exports.createComment = async (req, res) => {
  try {
    const { userId, establishmentId, content } = req.body;

    if (!userId || !establishmentId || !content) {
      return res.status(400).json({
        message: "userId, establishmentId ve content zorunludur."
      });
    }

    const comment = await Comment.create({
      userId,
      establishmentId,
      content
    });

    return res.status(201).json(comment);
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);

    if (!comment) {
      return res.status(404).json({ message: "Yorum bulunamadı." });
    }

    return res.status(200).json({ message: "Yorum başarıyla kaldırıldı." });
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};