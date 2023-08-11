import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
dotenv.config()

//DBSTRING CONNECTION
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(cors({ origin: "*" }))
// app.use(express.static("dist"));

//**ROUTES FOR STUDENTS*/
app.get("/students", async (req, res) => {
  try {
    const results = await pool.query(`SELECT * FROM blogs`);
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
    const results = await pool.query(
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
    const results = await pool.query(
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
app.delete("/blogs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const results = await pool.query(`DELETE FROM blogs WHERE id = ${id}`);
    if (results.rowCount === 0) {
      res.status(404).send("Cannot Find Blog Post");
    } else {
      res.status(200).json(results.rows[0]);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});




//**ROUTES TEMPLATE ROUTES DANNY MADE */
app.get("/api/tasks", async (req, res, next) => {
  const result = await db.query("SELECT * FROM tasks").catch(next);
  res.send(result.rows);
});

app.get("/api/tasks/:id", async (req, res, next) => {
  const result = await db
    .query("SELECT * FROM tasks WHERE id = $1", [req.params.id])
    .catch(next);

  if (result.rows.length === 0) {
    res.sendStatus(404);
  } else {
    res.send(result.rows[0]);
  }
});

app.post("/api/tasks", async (req, res, next) => {
  const { description } = req.body;

  const result = await db
    .query("INSERT INTO tasks(description) VALUES ($1)", [description])
    .catch(next);
  res.send(result.rows[0]);
});

app.delete("/api/tasks/:id", async (req, res, next) => {
  const { id } = req.params;

  await db.query("DELETE FROM tasks WHERE id = $1", [id]).catch(next);
  res.sendStatus(204);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

export default app;
