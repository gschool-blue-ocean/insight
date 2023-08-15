import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
import userRoutes from "./roles/userRoutes.js";

dotenv.config();

//DBSTRING CONNECTION
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const app = express();

//MIDDLEWARES
app.use("/users", userRoutes);
app.use(express.json());
app.use(cors({ origin: "*" }));


export { app, db };
