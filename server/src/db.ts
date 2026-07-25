import { Collection, Db, MongoClient } from "mongodb";
import { Project, ContactMessage } from "./types";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI is not set");
}

const client = new MongoClient(uri);
let db: Db | undefined;

export async function connectDB(): Promise<Db> {
  if (db) return db;
  await client.connect();
  db = client.db();
  return db;
}

export async function projectsCollection(): Promise<Collection<Project>> {
  const database = await connectDB();
  return database.collection<Project>("projects");
}

export async function contactsCollection(): Promise<Collection<ContactMessage>> {
  const database = await connectDB();
  return database.collection<ContactMessage>("contacts");
}
