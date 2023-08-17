import { db } from "../server.js";
import express from "express";

const router = express.Router();

router.use(express.json());


router.get("/", async (req, res) => {
    try {
      const results = await db.query(`UPDATE auth SET token = null, expiration_date = null WHERE userId = $1`, [userId]);
      res.status(200).json(results.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });











export default router