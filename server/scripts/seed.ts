import "dotenv/config";
import { MongoClient } from "mongodb";
import { Project } from "../src/types";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI is not set");
}

const projects: Project[] = [
  {
    slug: "house-rent-management-system",
    name: "House Rent Management System",
    image: "/projects/house-rent.jpg",
    shortDescription:
      "A complete house rent management platform where tenants can browse properties and landlords can manage rentals.",
    description:
      "A complete house rent management platform where tenants can browse properties and landlords can manage rentals. Landlords can list properties, tenants can browse and book, and both sides get a dashboard tailored to their role.",
    techStack: ["Next.js", "React", "MongoDB", "Better Auth", "Tailwind CSS"],
    liveLink: "",
    githubClientLink: "https://github.com/abdullahazmir/house-rent-management",
    challenges: "Authentication, booking workflow, database relationships.",
    futureImprovements: "Online payment, notifications, admin dashboard.",
  },
  {
    slug: "law-firm-management-website",
    name: "Law Firm Management Website",
    image: "/projects/law-firm.jpg",
    shortDescription:
      "A responsive law firm website featuring lawyer profiles, services, appointments, and modern UI.",
    description:
      "A responsive law firm website featuring lawyer profiles, services, appointments, and modern UI. Built to give a professional web presence with clear service listings and an appointment request flow.",
    techStack: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    liveLink: "",
    githubClientLink: "https://github.com/abdullahazmir/legal-solutions-client",
    challenges: "Responsive layouts, dynamic routing.",
    futureImprovements: "Client portal, appointment management, dashboard.",
  },
  {
    slug: "tools-e-commerce-website",
    name: "Tools E-Commerce-Website",
    image: "/projects/fire-safety.jpg",
    shortDescription:
      "A full-stack AI-powered tools marketplace where users can discover, manage, and access various online tools.",
    description:
      "A full-stack AI-powered tools marketplace where users can discover, manage, and access various online tools.Built a responsive platform using Next.js, React, Node.js, Express, and MongoDB.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "",
    githubClientLink: "https://github.com/abdullahazmir/all-tools",
    challenges: "Product management, search and filtering, shopping cart.",
    futureImprovements: " inventory management, order tracking.",
  },
];

async function seed() {
  const client = new MongoClient(uri as string);
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection<Project>("projects");

    for (const project of projects) {
      await collection.updateOne(
        { slug: project.slug },
        { $set: project },
        { upsert: true }
      );
      console.log(`Upserted: ${project.name}`);
    }

    console.log("Seed complete.");
  } finally {
    await client.close();
  }
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
