import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function generateAccessToken(data) {
  return jwt.sign(
    { userid: data.userid, role: data.role },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "25s",
    }
  );
}

export function generateRefreshToken(data) {
  return jwt.sign(
    { userid: data.userid, role: data.role },
    process.env.REFRESH_TOKEN_SECRET
  );
}
