import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
import userRoutes from "./roles/userRoutes.js";

dotenv.config();

//DBSTRING CONNECTION
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const app = express();

//MIDDLEWARES
app.use("/users", userRoutes);
app.use(express.json());
app.use(cors({ origin: "*" }));

//PUT REQUIRES AN ID AND BODY DATA
app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const put = req.body;
  try {
    const results = await db.query(
      `UPDATE users SET username = ('${put.username}'), firstName = ('${put.firstName}'), lastName = ('${put.lastName}'), emailAddress = ('${put.emailAddress}') WHERE id = ${id} RETURNING *`
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

//DELETE REQUIRES AN ID
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await db.query(`DELETE FROM users WHERE id = ${id}`);
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Users");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//**ROUTES FOR STUDENTS NEEDS WORK*/
app.get("/students", async (req, res) => {
  try {
    const results = await db.query(`SELECT * FROM blogs`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/students/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await db.query(`SELECT * FROM students WHERE id = ${id}`);
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//POST REQUIRES BODY DATA
app.post("/students", async (req, res) => {
  const student = req.body;
  try {
    const results = await db.query(
      `INSERT INTO blogs (author, blogs_title, blogs_body) VALUES ( ('${student.userName}'), ('${student.something}'), ('${student.something}') ) RETURNING *`
    );
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Blog Post");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//PUT REQUIRES AN ID AND BODY DATA
app.put("/students/:id", async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  try {
    const results = await db.query(
      `UPDATE blogs SET author = ('${post.author}'), blogs_title = ('${post.blogs_title}'), blogs_body = ('${post.blogs_body}') WHERE id = ${id} RETURNING *`
    );
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Blog Post");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//DELETE REQUIRES AN ID
app.delete("/students/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await db.query(`DELETE FROM blogs WHERE id = ${id}`);
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Blog Post");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export { app, db };
