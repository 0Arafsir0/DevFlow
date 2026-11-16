
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { prisma } from "./lib/prisma.js";

const app = express();

// Security headers
app.use(helmet());

// Frontend communication
app.use(
  cors({
    origin: process.env.CORS_ORIGIN ?? "http://localhost:5173",
    credentials: true,
  }),
);

// Request parsing
app.use(express.json({ limit: "1mb" }));

// API health check
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "DEVFLOW API is running",
    service: "devflow-api",
  });
});

// Database health check
app.get("/api/health/db", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    res.status(200).json({
      success: true,
      message: "Database connection established",
      database: "PostgreSQL",
      status: "connected",
    });
  } catch (error) {
    console.error("Database health check failed:", error);

    res.status(503).json({
      success: false,
      message: "Database connection failed",
      database: "PostgreSQL",
      status: "disconnected",
    });
  }
});

export default app;
