import { app, db } from "../server.js";
import express from 'express'


const userRoutes = (app) => {
  app.use(express.json())

  app.get("/users", async (req, res) => {
    try {
      const results = await db.query(`SELECT * FROM users`);
      res.status(200).json(results.rows);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });


  app.get("/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const results = await db.query(`SELECT * FROM users WHERE userId = ${id}`);
      results.rowCount === 0 ? res.status(400).send('User not found') : res.status(200).json(results.rows)
    } catch (err) {
      res.status(500).send(err.message);
    }
  });


  app.post("/users", async (req, res) => {
    const { username, firstName, lastName, emailAddress, role } = req.body;
    try {
      const results = await db.query(
        `INSERT INTO users (username, firstName, lastName, emailAddress, role) VALUES ( ('${username}'), ('${firstName}'), ('${lastName}'), ('${emailAddress}'), ('${role}') ) RETURNING *`
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
};




export default userRoutes