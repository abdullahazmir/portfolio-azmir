"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@heroui/react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="label mb-1 block">
          Name
        </label>
        <input
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="input w-full"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="label mb-1 block">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="input w-full"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="label mb-1 block">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="textarea w-full"
          placeholder="How can I help?"
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        fullWidth
        isDisabled={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-success">Thanks! Your message has been sent.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-danger">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
