import express from "express";
import cors from "cors";
import pg from "pg";
//!ROUTES imports
import studentRoutes from "./roles/studentRoutes.js";
import assignmentRoutes from "./misc/assignments.js";
import attendanceRoutes from "./misc/attendance.js";
import gradeRoutes from "./misc/avg_grades.js";
import instructorRoutes from "./roles/instructorRoutes.js";
import userRoutes from "./roles/userRoutes.js";
import cohortRoutes from "./misc/cohort.js";
import adminRoutes from "./roles/adminRoutes.js";
import dotenv from "dotenv";
import loginRoute from "./misc/loginRoute.js";
dotenv.config({ path: '../.env' });

const PORT = process.env.PORT

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

//!ROUTES
app.use("/admin", adminRoutes);
app.use("/instructors", instructorRoutes);
app.use("/students", studentRoutes);
app.use("/users", userRoutes);
app.use("/assignments", assignmentRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/grades", gradeRoutes);
app.use("/login", loginRoute);
app.use("/cohorts", cohortRoutes);




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
  

export { app, db };



