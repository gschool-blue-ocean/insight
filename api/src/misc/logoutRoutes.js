import { db } from "../server.js";
import express from "express";
import cors from 'cors'

const router = express.Router();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true
};


router.use(cors(corsOptions))
router.use(express.json());




router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
      const results = await db.query(`UPDATE auth SET token = null, expiration_date = null WHERE userId = $1`, [id]);
      res.status(200).json(results.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });











export default router