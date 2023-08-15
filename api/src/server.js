import express from "express";
import cors from "cors";
import pg from "pg";
//!ROUTES imports
import assignmentRoutes from "./misc/assignments.js";
import attendanceRoutes from "./misc/attendance.js";
import gradeRoutes from "./misc/avg_grades.js";
import userRoutes from "./roles/userRoutes.js";
import cohortRoutes from "./misc/cohort.js";
import dotenv from "dotenv";
dotenv.config("api/.env");

//DBSTRING CONNECTION
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(cors({ origin: "*" }));
// app.use(express.static("dist"));
//!Roles ROUTES
app.use("/users", userRoutes);

//!MISC ROUTES
app.use("/assignments", assignmentRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/grades", gradeRoutes);
app.use("/cohorts", cohortRoutes);

export { app, db };
