import { db } from "../server.js";
import express from "express";

const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const results = await db.query(`SELECT * FROM students_assignments`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  const studentId = req.query.studentId
  const assignmentId = req.query.assignmentId
  try {
    const results = await db.query(`SELECT * FROM students WHERE studentId = $1 AND assignmentId = $2`, [studentId, assignmentId]);
    results.rowCount === 0
      ? res.status(400).send("User not found")
      : res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  const { studentId, assignmentId } = req.body;
  try {
    const results = await db.query(
      `INSERT INTO students (studentId, assignmentId, is_submitted, grade) VALUES ($1, $2, false, null) RETURNING *`, [studentId, assignmentId]
    );
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find User");
    } else {
      res.status(201).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.put("/", async (req, res) => {
  const { studentId, assignmentId, is_submitted, grade } = req.body;
  try {
    const results = await db.query(
      `UPDATE students SET studentId = $1, assignmentId = $2, is_submitted = $3, grade = $4 WHERE studentId = $5 AND assignmentId = $6 RETURNING *`, [studentId, assignmentId, is_submitted, grade]
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

router.delete("/", async (req, res) => {
  const studentId = req.query.studentId
  const assignmentId = req.query.assignmentId
  try {
    const results = await db.query(`DELETE FROM students_assignments WHERE studentId = $1 AND assignmentId = $2`, [studentId, assignmentId]);
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
