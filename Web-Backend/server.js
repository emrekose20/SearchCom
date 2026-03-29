const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");

const userRoutes = require("./routes/userRoutes");
const establishmentRoutes = require("./routes/establishmentRoutes");
const ratingRoutes = require("./routes/ratingRoutes");
const commentRoutes = require("./routes/commentRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/establishments", establishmentRoutes);
app.use("/api/ratings", ratingRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/favorites", favoriteRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server çalışıyor: http://localhost:3000");
  });
}).catch((err) => {
  console.error("Veritabanı bağlantı hatası:", err);
});