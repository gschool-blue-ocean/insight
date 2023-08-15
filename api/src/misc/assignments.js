import { db } from "../server.js";

import express from "express";

const router = express.Router();
import { db } from "../server.js";

router.use(express.json());

//!assignments ROUTES WORKS
router.get("/", async (req, res) => {
  try {
    const results = await db.query(`SELECT * FROM assignments`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await db.query(
      `SELECT * FROM assignments WHERE id = ${id}`
    );
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//POST REQUIRES BODY DATA
router.post("/", async (req, res) => {
  const { title, due_date, description, cohortId } = req.body;
  try {
    const results = await db.query(
      `INSERT INTO assignments (title, due_date, description, cohortId) VALUES ( ('${title}'), ('${due_date}'), ('${description}'), (${cohortId}) ) RETURNING *`
    );
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Assignment");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//PUT REQUIRES AN ID AND BODY DATA
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, due_date, description, cohortId } = req.body;
  try {
    const results = await db.query(
      `UPDATE assignments SET title = ('${title}'), due_date = ('${due_date}'), description = ('${description}'), cohortId = (${cohortId}) WHERE id = ${id} RETURNING *`
    );
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Assignment");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//DELETE REQUIRES AN ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await db.query(`DELETE FROM assignments WHERE id = ${id}`);
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Assignment");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
