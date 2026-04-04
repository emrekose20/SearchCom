const { Rating, Establishment } = require("../models");

exports.createRating = async (req, res) => {
  try {
    const { userId, establishmentName, score } = req.body;

    if (!userId || !establishmentName || score === undefined) {
      return res.status(400).json({
        message: "userId, establishmentName ve score zorunludur."
      });
    }

    if (score < 1 || score > 5) {
      return res.status(400).json({
        message: "Puan 1 ile 5 arasında olmalıdır."
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

    const rating = await Rating.create({
      userId,
      establishmentId: establishment._id,
      score
    });

    return res.status(201).json({
      message: "Puan oluşturuldu.",
      rating
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.getMyRatings = async (req, res) => {
  try {
    const ratings = await Rating.find({ userId: req.params.userId })
      .sort({ createdAt: -1 })
      .populate("establishmentId", "name");

    const formattedRatings = ratings.map((rating) => ({
      _id: rating._id,
      score: rating.score,
      establishmentName: rating.establishmentId?.name || "Mekan bulunamadı"
    }));

    return res.status(200).json(formattedRatings);
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.updateRating = async (req, res) => {
  try {
    const { score } = req.body;

    if (score === undefined || score < 1 || score > 5) {
      return res.status(400).json({
        message: "Puan 1 ile 5 arasında olmalıdır."
      });
    }

    const rating = await Rating.findByIdAndUpdate(
      req.params.id,
      { score },
      { new: true, runValidators: true }
    );

    if (!rating) {
      return res.status(404).json({
        message: "Puan bulunamadı."
      });
    }

    return res.status(200).json({
      message: "Puan güncellendi.",
      rating
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};