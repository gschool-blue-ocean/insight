//!devdependencies
import express from "express";
import cors from "cors";
import pg from "pg";
import cluster from "cluster";
import dotenv from "dotenv";
import os from "os";
//!ROUTES imports
import studentRoutes from "./roles/studentRoutes.js";
import assignmentRoutes from "./misc/assignments.js";
import attendanceRoutes from "./misc/attendance.js";
import instructorRoutes from "./roles/instructorRoutes.js";
import userRoutes from "./roles/userRoutes.js";
import cohortRoutes from "./misc/cohort.js";
import adminRoutes from "./roles/adminRoutes.js";
import loginRoute from "./misc/loginRoute.js";
import logoutRoutes from './misc/logoutRoutes.js'
import students_assignmentsRoutes from './misc/students_assignments.js'

//env config pathing
dotenv.config({ path: ".env" });

const app = express();
const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

//checkto see if the curr process is the primary process or a forked one
if (cluster.isPrimary) { //if prim see total cpus aval on system 
  const totalCPUs = os.cpus().length;
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Primary ${process.pid} is running`);
//loop through all CPUS and fork worker proccess === to num of cpus aval. ea cpu has a worker
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
  console.log(`Worker ${process.pid} started`);

  const logWorkerAndMemory = (req, res, next) => {
    const workerId = cluster.isWorker ? cluster.worker.id : "Master";
    const memoryUsage = process.memoryUsage().heapUsed;
    console.log(`Worker ID: ${workerId}`);
    console.log(`Memory Usage: ${memoryUsage} bytes`);
    next();
  };
  //MIDDLEWARE
  app.use(logWorkerAndMemory);
  app.use(express.json());
  app.use(cors());
  app.use(express.static('../../client/src/dist'))
  // ROUTES
  app.use("/admin", adminRoutes);
  app.use('/logout', logoutRoutes)
  app.use("/instructors", instructorRoutes);
  app.use("/students", studentRoutes);
  app.use("/users", userRoutes);
  app.use("/assignments", assignmentRoutes);
  app.use("/attendance", attendanceRoutes);
  app.use("/cohorts", cohortRoutes);
  app.use("/login", loginRoute);
  app.use('/students_assignments', students_assignmentsRoutes)

  // ... Existing code for the clustering ...
  app.get("/status", (req, res) => {
    // Get worker id (if applicable)
    const workerId = cluster.isWorker ? cluster.worker.id : "Master";

    // Get memory usage
    const memoryUsage = process.memoryUsage();

    // Get system memory
    const totalSystemMemory = os.totalmem();
    const freeSystemMemory = os.freemem();

    // Get CPU information
    const cpus = os.cpus();

    // Respond with the gathered information
    res.status(200).json({
      workerId,
      memoryUsage,
      totalSystemMemory,
      freeSystemMemory,
      cpus,
    });
  });

const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}
 

export { app, db };
