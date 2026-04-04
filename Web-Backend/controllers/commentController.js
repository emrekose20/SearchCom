const { Comment, Establishment } = require("../models");

exports.createComment = async (req, res) => {
  try {
    const { userId, establishmentName, content } = req.body;

    if (!userId || !establishmentName || !content) {
      return res.status(400).json({
        message: "userId, establishmentName ve content zorunludur."
      });
    }

    const establishment = await Establishment.findOne({
      name: establishmentName.trim()
    });

    if (!establishment) {
      return res.status(404).json({
        message: "Bu isimde mekan bulunamadı."
      });
    }

    const comment = await Comment.create({
      userId,
      establishmentId: establishment._id,
      content
    });

    return res.status(201).json({
      message: "Yorum oluşturuldu.",
      comment
    });
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
      return res.status(404).json({
        message: "Yorum bulunamadı."
      });
    }

    return res.status(200).json({
      message: "Yorum silindi."
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.getMyComments = async (req, res) => {
  try {
    const comments = await Comment.find({ userId: req.params.userId })
      .sort({ createdAt: -1 })
      .populate("establishmentId", "name");

    const formattedComments = comments.map((comment) => ({
      _id: comment._id,
      content: comment.content,
      establishmentName: comment.establishmentId?.name || "Mekan bulunamadı"
    }));

    return res.status(200).json(formattedComments);
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.getCommentsByEstablishment = async (req, res) => {
  try {
    const establishment = await Establishment.findOne({
      name: req.params.name
    });

    if (!establishment) {
      return res.status(404).json({
        message: "Mekan bulunamadı."
      });
    }

    const comments = await Comment.find({
      establishmentId: establishment._id
    })
      .sort({ createdAt: -1 })
      .populate("userId", "name");

    const formattedComments = comments.map((comment) => ({
      _id: comment._id,
      content: comment.content,
      userName: comment.userId?.name || "Kullanıcı bulunamadı"
    }));

    return res.status(200).json(formattedComments);
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};