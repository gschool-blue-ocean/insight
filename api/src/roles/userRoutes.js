import { app, db } from "../server.js";

const userRoutes = (app) => {
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




};


export default userRoutes