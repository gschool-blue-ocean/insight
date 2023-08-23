import { db } from "../server.js";
import express from "express";

const router = express.Router();

router.use(express.json());

router.get("/:id", async (req, res) => {
  const { id } = req.params
  console.log(id)
  try {
    const results = await db.query(`SELECT * FROM students_assignments WHERE studentId = $1`, [id]);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  const studentId = req.query.studentId
  const assignmentId = req.query.assignmentId
  try {
    const results = await db.query(`SELECT * FROM students_assignments WHERE studentId = $1 AND assignmentId = $2`, [studentId, assignmentId]);
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
      `INSERT INTO students_assignments (studentId, assignmentId, is_submitted, grade) VALUES ($1, $2, false, 0, '') RETURNING *`, [studentId, assignmentId]
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
  const { studentId, assignmentId, is_submitted, grade, instructor_comments } = req.body;
  try {
    const results = await db.query(
      `UPDATE students_assignments SET studentId = $1, assignmentId = $2, is_submitted = $3, grade = $4, instructor_comments = $5 WHERE studentId = $6 AND assignmentId = $7 RETURNING *`, [studentId, assignmentId, is_submitted, grade, instructor_comments]
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
