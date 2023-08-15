import { db } from "../server.js";
import express from "express";

const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const results = await db.query(`SELECT * FROM users`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await db.query(`SELECT * FROM users WHERE userId = ${id}`);
    results.rowCount === 0
      ? res.status(400).send("User not found")
      : res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  const { username, firstName, lastName, role } = req.body;
  try {
    const results = await db.query(
      `INSERT INTO users (username, firstName, lastName, emailAddress, role) VALUES ( ('${username}'), ('${firstName}'), ('${lastName}'), ('${role}') ) RETURNING *`
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








export default router;
