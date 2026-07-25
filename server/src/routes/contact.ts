import { Router } from "express";
import { contactsCollection } from "../db";

const router = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", async (req, res) => {
  const { name, email, message } = req.body ?? {};

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim() ||
    !EMAIL_RE.test(email)
  ) {
    res.status(400).json({ error: "Valid name, email, and message are required" });
    return;
  }

  const contacts = await contactsCollection();
  await contacts.insertOne({
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    createdAt: new Date(),
  });

  res.status(201).json({ success: true });
});

export default router;
