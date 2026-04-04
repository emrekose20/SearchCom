const { Establishment } = require("../models");

exports.createEstablishment = async (req, res) => {
  try {
    const { name, address } = req.body;

    if (!name || !address) {
      return res.status(400).json({
        message: "name ve address zorunludur."
      });
    }

    const establishment = await Establishment.create({ name, address });

    return res.status(201).json({
      message: "Mekan oluşturuldu.",
      establishment
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.getAllEstablishments = async (req, res) => {
  try {
    const establishments = await Establishment.find().sort({ createdAt: -1 });
    return res.status(200).json(establishments);
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.updateEstablishment = async (req, res) => {
  try {
    const { name, address } = req.body;

    const updateData = {};
    if (name) updateData.name = name;
    if (address) updateData.address = address;

    const establishment = await Establishment.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!establishment) {
      return res.status(404).json({
        message: "İşletme bulunamadı."
      });
    }

    return res.status(200).json({
      message: "İşletme bilgileri güncellendi.",
      establishment
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.deleteEstablishment = async (req, res) => {
  try {
    const establishment = await Establishment.findByIdAndDelete(req.params.id);

    if (!establishment) {
      return res.status(404).json({
        message: "İşletme bulunamadı."
      });
    }

    return res.status(200).json({
      message: "İşletme kaydı silindi."
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};