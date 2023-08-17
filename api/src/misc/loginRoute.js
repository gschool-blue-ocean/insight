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
    `SELECT users.userId, users.role, auth.password FROM users JOIN auth ON users.userId=auth.userId WHERE users.username = '${username}';`
  );
  if (result.rows.length === 0) {
    res.status(404).send("Authentication failed");
  } else {
    try {
      const data = result.rows[0];
      console.log(data);
      if (await bcrypt.compare(password, data.password)) {
        const accessToken = generateAccessToken(data);
        const refreshToken = generateRefreshToken(data);
        await db.query(`UPDATE auth SET token = '${refreshToken}' WHERE userId = ${data.userid}`);
        console.log(data)
        res.cookie("jwt", refreshToken, {
          httpOnly: true,
          // secure: true,
          // sameSite: "None",
          // maxAge: 24 * 60 * 60 * 1000,
        });
        res.status(200).json({ accessToken });
      } else {
        res.send("Not allowed");
      }
    } catch {
      res.status(500).send();
    }
  }
});

export default router;
