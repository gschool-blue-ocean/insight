import { db } from "../server.js";

import express from "express";

const router = express.Router();

router.use(express.json());

//!cohort ROUTES WORKS
router.get("/", async (req, res) => {
  try {
    const results = await db.query(`SELECT * FROM cohorts`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await db.query(`SELECT * FROM cohorts WHERE id = ${id}`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//POST REQUIRES BODY DATA
router.post("/", async (req, res) => {
  const { instructorId, start_date, end_date, nps } = req.body;
  try {
    const results = await db.query(
      `INSERT INTO cohorts (instructorId, start_date, end_date, nps) VALUES ( (${instructorId}), ('${start_date}'), ('${end_date}'), (${nps}) ) RETURNING *`
    );
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Cohort");
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
  const { instructorId, start_date, end_date, nps } = req.body;
  try {
    const results = await db.query(
      `UPDATE cohorts SET instructorId = (${instructorId}), start_date = ('${start_date}'), end_date = ('${end_date}'), nps = (${nps}) WHERE id = ${id} RETURNING *`
    );
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Cohort");
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
    const results = await db.query(`DELETE FROM cohorts WHERE id = ${id}`);
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Cohort");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
