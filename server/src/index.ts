import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { connectDB } from "./db";
import projectsRouter from "./routes/projects";
import contactRouter from "./routes/contact";

const app = express();
const port = process.env.PORT ?? 5000;
const clientOrigin = process.env.CLIENT_ORIGIN ?? "http://localhost:3000";

app.use(cors({ origin: clientOrigin }));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/projects", projectsRouter);
app.use("/api/contact", contactRouter);

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1);
  });
