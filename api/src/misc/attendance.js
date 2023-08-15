import express from "express";
const router = express.Router();
import pg from "pg"
import dotenv from "dotenv" 


const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });


//!ATTENDANCE ROUTES should be good
  router.get("/", async (req, res) => {
    try {
      const results = await db.query(`SELECT * FROM attendance`);
      res.status(200).json(results.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const results = await db.query(
        `SELECT * FROM attendance WHERE id = ${id}`
      );
      res.status(200).json(results.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

  //POST REQUIRES BODY DATA
  router.post("/", async (req, res) => {
    const { absences, cohort_length, studentId } = req.body;
    try {
      const results = await db.query(
        `INSERT INTO attendance (absences, cohort_length, studentId) VALUES ( (${absences}), (${cohort_length}), (${studentId}) RETURNING *`
      );
      if (results.rowCount === 0) {
        res.status(404).send("Cannot Find Attendance Record");
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
    const { absences, cohort_length, studentId } = req.body;
    try {
      const results = await db.query(
        `UPDATE attendance SET absences = (${absences}), cohort_length = (${cohort_length}), studentID = (${studentId}) WHERE id = ${id} RETURNING *`
      );
      if (results.rowCount === 0) {
        res.status(404).send("Cannot Find Attendance Record");
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
      const results = await db.query(`DELETE FROM attendance WHERE id = ${id}`);
      if (results.rowCount === 0) {
        res.status(404).send("Cannot Find Specific Attendance Record");
      } else {
        res.status(200).json(results.rows[0]);
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

export default router;
