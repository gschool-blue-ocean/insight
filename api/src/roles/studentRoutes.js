import { db } from "../server.js";
import express from "express";

const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const results = await db.query(`SELECT * FROM students`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await db.query(`SELECT * FROM students WHERE studentId = ${id}`);
    results.rowCount === 0
      ? res.status(400).send("User not found")
      : res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  const { cohortid, userid, nps_rating, days_absent, checkin_count, avg_grade } = req.body;
  try {
    const results = await db.query(
      `INSERT INTO students (cohortid, userid, nps_rating, days_absent, checkin_count, avg_grade) 
        VALUES ($1, $2, $3, 0, 0, 0) RETURNING *`, [cohortid, userid, nps_rating]
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
  const { studentid, cohortid, userid, nps_rating } = req.body;
  try {
    const results = await db.query(
      `UPDATE students SET cohortid = ('${cohortid}'), userid = ('${userid}'), nps_rating = ('${nps_rating}') WHERE studentId = ${id} RETURNING *`
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

router.put("/checkin/:id", async (req, res) => {
  const { id } = req.params;
  const { cohortid, userid, nps_rating, days_absent, avg_grade } = req.body
  try {
    const results = await db.query(
      `UPDATE students
      SET cohortid = $1, userid = $2, nps_rating = $3, days_absent = $4, checkin_count = checkin_count + 1, avg_grade = $5
      WHERE studentId = $6
      RETURNING *`,
      [cohortid, userid, nps_rating, days_absent, avg_grade, id]
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
    const results = await db.query(`DELETE FROM students WHERE userId = ${id}`);
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
