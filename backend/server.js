require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const commentRouters = require("./routes/comments");
const app = express();

app.use(cors());
app.use(express.json());
app.use(cors({ origin: "https://mi.com.co" }));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("error connecting to MongoDB", err));

app.use("/api/comments", commentRouters);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
