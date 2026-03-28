const { Rating } = require("../models");

exports.createRating = async (req, res) => {
  try {
    const { userId, establishmentId, score } = req.body;

    if (!userId || !establishmentId || score === undefined) {
      return res.status(400).json({
        message: "userId, establishmentId ve score zorunludur."
      });
    }

    if (score < 1 || score > 5) {
      return res.status(400).json({
        message: "Puan 1 ile 5 arasında olmalıdır."
      });
    }

    const rating = await Rating.create({
      userId,
      establishmentId,
      score
    });

    return res.status(201).json(rating);
  } catch (error) {
    return res.status(500).json({ message: "Sunucu hatası", error: error.message });
  }
};

exports.getRatingsByEstablishment = async (req, res) => {
  try {
    const { id } = req.params;

    const ratings = await Rating.findAll({
      where: { establishmentId: id }
    });

    const count = ratings.length;
    const total = ratings.reduce((sum, item) => sum + item.score, 0);
    const average = count > 0 ? total / count : 0;

    return res.status(200).json({
      establishmentId: Number(id),
      averageScore: average,
      ratings
    });
  } catch (error) {
    return res.status(500).json({ message: "Sunucu hatası", error: error.message });
  }
};

exports.updateRating = async (req, res) => {
  try {
    const { id } = req.params;
    const { score } = req.body;

    const rating = await Rating.findByPk(id);

    if (!rating) {
      return res.status(404).json({ message: "Puan bulunamadı." });
    }

    if (score === undefined || score < 1 || score > 5) {
      return res.status(400).json({
        message: "Puan 1 ile 5 arasında olmalıdır."
      });
    }

    rating.score = score;
    await rating.save();

    return res.status(200).json({
      message: "Puan güncellendi.",
      rating
    });
  } catch (error) {
    return res.status(500).json({ message: "Sunucu hatası", error: error.message });
  }
};