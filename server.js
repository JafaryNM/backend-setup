import express from "express";
import dotenv from "dotenv";
const app = express();

dotenv.config();

const PORT = process.env.PORT || 4001;

app.get("/", (req, res) => {
  res.send("Working autorotate");
});

app.listen(PORT, () => {
  console.log("Server is up and running");
});
