const { Favorite, FavoriteFolder } = require("../models");

exports.createFavorite = async (req, res) => {
  try {
    const { userId, establishmentId, folderId } = req.body;

    if (!userId || !establishmentId) {
      return res.status(400).json({
        message: "userId ve establishmentId zorunludur."
      });
    }

    const favorite = await Favorite.create({
      userId,
      establishmentId,
      folderId: folderId || null
    });

    return res.status(201).json(favorite);
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.getFavoritesByUser = async (req, res) => {
  try {
    const favorites = await Favorite.find({
      userId: req.params.userId
    });

    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.updateFavoriteFolder = async (req, res) => {
  try {
    const { folderName } = req.body;

    if (!folderName) {
      return res.status(400).json({
        message: "folderName zorunludur."
      });
    }

    const folder = await FavoriteFolder.findByIdAndUpdate(
      req.params.id,
      { folderName },
      { new: true, runValidators: true }
    );

    if (!folder) {
      return res.status(404).json({
        message: "Favori klasörü bulunamadı."
      });
    }

    return res.status(200).json({
      message: "Favori listesi başlığı güncellendi.",
      folder
    });
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