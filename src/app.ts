import express from "express";
import cors from "cors";
import router from "./routes/auth.routes";
import insightsRoutes from "./routes/insights";
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/tasks", require("./routes/task.routes"));
app.use("/api/auth", router);
app.use("/api/insights", insightsRoutes);

export default app;
