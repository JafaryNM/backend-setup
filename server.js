import express from "express";
import dotenv from "dotenv";
import { sql } from "./config/db.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4001;

async function initDatabase() {
  try {
    await await sql`
  CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    category VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE
  )
`;

    console.log("database initalize successfull");
  } catch (error) {
    console.log("Error initalized database", error);
    // Failed status processs
    process.exit(1);
  }
}

initDatabase().then(() => {
  app.get("/", (req, res) => {
    res.send("Working autorotate");
  });

  app.listen(PORT, () => {
    console.log("Server is up and running");
  });
});
