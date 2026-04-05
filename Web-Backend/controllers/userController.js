const { User } = require("../models");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "name, email ve password zorunludur."
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Bu email zaten kayıtlı."
      });
    }

    const user = await User.create({ name, email, password });

    return res.status(201).json({
      message: "Kayıt başarılı.",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "email ve password zorunludur."
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "Kullanıcı bulunamadı."
      });
    }

    if (user.password !== password) {
      return res.status(400).json({
        message: "Şifre hatalı."
      });
    }

    return res.status(200).json({
      message: "Giriş başarılı.",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "Kullanıcı bulunamadı."
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    const updateData = {};
    if (name) updateData.name = name;
    if (password) updateData.password = password;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "Kullanıcı bulunamadı."
      });
    }

    return res.status(200).json({
      message: "Profil güncellendi.",
      user
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "Kullanıcı bulunamadı."
      });
    }

    return res.status(200).json({
      message: "Kullanıcı hesabı silindi."
    });
  } catch (error) {
    return res.status(500).json({
      message: "Sunucu hatası",
      error: error.message
    });
  }
};