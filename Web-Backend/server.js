const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");

const userRoutes = require("./routes/userRoutes");
const establishmentRoutes = require("./routes/establishmentRoutes");
const ratingRoutes = require("./routes/ratingRoutes");
const commentRoutes = require("./routes/commentRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/v1/users", userRoutes);
app.use("/v1/establishments", establishmentRoutes);
app.use("/v1/ratings", ratingRoutes);
app.use("/v1/comments", commentRoutes);
app.use("/v1/favorites", favoriteRoutes);

app.use(errorHandler);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server çalışıyor: http://localhost:3000");
  });
});