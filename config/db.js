import { neon } from "@neondatabase/serverless";
import "dotenv/config";

// Create sql connection to database
export const sql = neon(process.env.DATABASE_URL);
