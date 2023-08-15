import { db } from "../server.js";
import express from "express";

const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const results = await db.query(`SELECT * FROM instructors`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await db.query(`SELECT * FROM instructors WHERE instructorid = ${id}`);
    results.rowCount === 0
      ? res.status(400).send("User not found")
      : res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  const { userid } = req.body;
  try {
    const results = await db.query(
      `INSERT INTO instructors (userid) VALUES ('${userid}') RETURNING *`
    );
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find User");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { userid } = req.body;
  try {
    const results = await db.query(
      `UPDATE instructors SET userid = '${userid}' WHERE instructorid = ${id} RETURNING *`
    );
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find User");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await db.query(`DELETE FROM instructors WHERE instructorid = ${id}`);
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find User");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
