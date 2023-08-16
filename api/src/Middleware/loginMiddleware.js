import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export function generateAccessToken(userid) {
  return jwt.sign({ userid }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "25s",
  });
}

export function generateRefreshToken(userid) {
  return jwt.sign({ userid }, process.env.REFRESH_TOKEN_SECRET);
}
