import { Router } from "express";
import { projectsCollection } from "../db";

const router = Router();

router.get("/", async (_req, res) => {
  const projects = await projectsCollection();
  const all = await projects.find({}, { projection: { _id: 0 } }).toArray();
  res.json(all);
});

router.get("/:slug", async (req, res) => {
  const projects = await projectsCollection();
  const project = await projects.findOne(
    { slug: req.params.slug },
    { projection: { _id: 0 } }
  );
  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }
  res.json(project);
});

export default router;
