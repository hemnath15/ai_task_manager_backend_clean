import { Router } from "express";
import authMiddleware from "../middleware/auth";
import Task from "../models/task.model";
import { generateTaskInsights } from "../services/aiService";

const insightsRoutes = Router();

insightsRoutes.get("/", authMiddleware, async (req: any, res) => {
  console.log("USER ID:", req.user.id);

  const tasks = await Task.find({ user: req.user.id });
  const insights = await generateTaskInsights(tasks);

  res.json({ insights });
});

export default insightsRoutes;
