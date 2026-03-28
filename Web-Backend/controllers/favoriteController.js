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
    return res.status(500).json({ message: "Sunucu hatası", error: error.message });
  }
};

exports.getFavoritesByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const favorites = await Favorite.findAll({
      where: { userId }
    });

    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json({ message: "Sunucu hatası", error: error.message });
  }
};

exports.updateFavoriteFolder = async (req, res) => {
  try {
    const { id } = req.params;
    const { folderName } = req.body;

    const folder = await FavoriteFolder.findByPk(id);

    if (!folder) {
      return res.status(404).json({
        message: "Favori klasörü bulunamadı."
      });
    }

    if (!folderName) {
      return res.status(400).json({
        message: "folderName zorunludur."
      });
    }

    folder.folderName = folderName;
    await folder.save();

    return res.status(200).json({
      message: "Favori listesi başlığı güncellendi.",
      folder
    });
  } catch (error) {
    return res.status(500).json({ message: "Sunucu hatası", error: error.message });
  }
};

exports.deleteFavorite = async (req, res) => {
  try {
    const { id } = req.params;

    const favorite = await Favorite.findByPk(id);

    if (!favorite) {
      return res.status(404).json({
        message: "Favori kaydı bulunamadı."
      });
    }

    await favorite.destroy();

    return res.status(200).json({
      message: "Mekan favorilerden çıkarıldı."
    });
  } catch (error) {
    return res.status(500).json({ message: "Sunucu hatası", error: error.message });
  }
};