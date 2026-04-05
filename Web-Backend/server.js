require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

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


// 🔥 BURAYI EKLEDİK
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="tr">
    <head>
      <meta charset="UTF-8" />
      <title>SearchCom API</title>
      <style>
        body {
          font-family: Arial;
          background: #0f172a;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .box {
          text-align: center;
          background: #1e293b;
          padding: 30px;
          border-radius: 15px;
        }
        a {
          display: block;
          margin: 10px;
          color: #38bdf8;
        }
      </style>
    </head>
    <body>
      <div class="box">
        <h1>SearchCom API Çalışıyor 🚀</h1>
        <p>Backend başarıyla deploy edildi</p>
        <a href="/api/users">Users</a>
        <a href="/api/establishments">Establishments</a>
        <a href="/api/ratings">Ratings</a>
        <a href="/api/comments">Comments</a>
        <a href="/api/favorites">Favorites</a>
      </div>
    </body>
    </html>
  `);
});


const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server çalışıyor: http://localhost:${PORT}`);
  });
});