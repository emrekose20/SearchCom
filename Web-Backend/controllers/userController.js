const { User } = require("../models");
 
exports.registerUser = async (req, res) => {

  try {

    const { name, email, password } = req.body;
 
    if (!name || !email || !password) {

      return res.status(400).json({ message: "name, email ve password zorunludur." });

    }
 
    const existingUser = await User.findOne({ where: { email } });
 
    if (existingUser) {

      return res.status(400).json({ message: "Bu email zaten kayıtlı." });

    }
 
    const user = await User.create({ name, email, password });
 
    return res.status(201).json(user);

  } catch (error) {

    return res.status(500).json({ message: "Sunucu hatası", error: error.message });

  }

};
 
exports.getUserById = async (req, res) => {

  try {

    const user = await User.findByPk(req.params.id);
 
    if (!user) {

      return res.status(404).json({ message: "Kullanıcı bulunamadı." });

    }
 
    return res.status(200).json(user);

  } catch (error) {

    return res.status(500).json({ message: "Sunucu hatası", error: error.message });

  }

};
 
exports.updateUser = async (req, res) => {

  try {

    const { name, password } = req.body;

    const user = await User.findByPk(req.params.id);
 
    if (!user) {

      return res.status(404).json({ message: "Kullanıcı bulunamadı." });

    }
 
    if (name) user.name = name;

    if (password) user.password = password;
 
    await user.save();
 
    return res.status(200).json({

      message: "Profil güncellendi.",

      user

    });

  } catch (error) {

    return res.status(500).json({ message: "Sunucu hatası", error: error.message });

  }

};
 
exports.deleteUser = async (req, res) => {

  try {

    const user = await User.findByPk(req.params.id);
 
    if (!user) {

      return res.status(404).json({ message: "Kullanıcı bulunamadı." });

    }
 
    await user.destroy();
 
    return res.status(200).json({

      message: "Kullanıcı hesabı silindi."

    });

  } catch (error) {

    return res.status(500).json({ message: "Sunucu hatası", error: error.message });

  }

};
 