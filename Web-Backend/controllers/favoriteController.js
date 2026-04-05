const { Favorite, Establishment } = require("../models");

exports.createFavorite = async (req, res) => {
  try {
    const { userId, establishmentName } = req.body;

    if (!userId || !establishmentName) {
      return res.status(400).json({
        message: "userId ve establishmentName zorunludur."
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

    const existingFavorite = await Favorite.findOne({
      userId,
      establishmentId: establishment._id
    });

    if (existingFavorite) {
      return res.status(400).json({
        message: "Bu mekan zaten favorilerinde mevcut."
      });
    }

    const favorite = await Favorite.create({
      userId,
      establishmentId: establishment._id
    });

    return res.status(201).json({
      message: "Mekan favorilere eklendi.",
      favorite
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.getFavoritesByUser = async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.params.userId })
      .sort({ createdAt: -1 })
      .populate("establishmentId", "name");

    const formattedFavorites = favorites.map((favorite) => ({
      _id: favorite._id,
      establishmentName: favorite.establishmentId?.name || "Mekan bulunamadı"
    }));

    return res.status(200).json(formattedFavorites);
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.deleteFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.findByIdAndDelete(req.params.id);

    if (!favorite) {
      return res.status(404).json({
        message: "Favori kaydı bulunamadı."
      });
    }

    return res.status(200).json({
      message: "Mekan favorilerden çıkarıldı."
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};