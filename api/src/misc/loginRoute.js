import bcrypt from "bcrypt";
import express from "express";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../Middleware/loginMiddleware.js";
import { db } from "../server.js";

const router = express.Router();
router.use(express.json());

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const result = await db.query(
    `SELECT users.userId, auth.password FROM users JOIN auth ON users.userId=auth.userId WHERE users.username = '${username}';`
  );
  if (!result) {
    res.status(404).send("Authentication failed");
  }
  try {
    const data = result.rows[0];
    console.log(data.userid);
    if (await bcrypt.compare(password, data.password)) {
      const accessToken = generateAccessToken(data.userid);
      const refreshToken = generateRefreshToken(data.userid);
      await db.query(`INSERT into auth (token) VALUES ('${refreshToken}')`);
      res.json({ accessToken: accessToken, refreshToken: refreshToken });
    } else {
      res.send("Not allowed");
    }
  } catch {
    res.status(500).send();
  }
});

export default router;
