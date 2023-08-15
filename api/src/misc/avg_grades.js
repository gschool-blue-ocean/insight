import { db } from "../server.js";

import express from "express";

const router = express.Router();

router.use(express.json());

//!grades ROUTES WORKS
router.get("/", async (req, res) => {
  try {
    const results = await db.query(`SELECT * FROM avg_grades`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await db.query(`SELECT * FROM avg_grades WHERE id = ${id}`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//POST REQUIRES BODY DATA
router.post("/", async (req, res) => {
  const { score, studentId, cohortId } = req.body;
  try {
    const results = await db.query(
      `INSERT INTO avg_grades (score, cohortId, studentId) VALUES ((${score}), (${studentId}), (${cohortId})) RETURNING *`
    );
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Grades");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//PUT REQUIRES AN I AND BODY DATA
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { score, studentId, cohortId } = req.body;
  try {
    const results = await db.query(
      `UPDATE avg_grades SET score = (${score}), cohortId = (${cohortId}), studentID = (${studentId}) WHERE id = ${id} RETURNING *`
    );
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Specific Grade Record");
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
    const results = await db.query(`DELETE FROM avg_grades WHERE id = ${id}`);
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Specific Grade Record");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
