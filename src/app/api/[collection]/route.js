// import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

import clientPromise from "@/lib/mongodb";

export async function GET(req, { params }) {
  const client = await clientPromise;
  const db = client.db("english_in_eight");

  const collectionName = params.collection.replace(/-/g, "_");
  const rows = await db.collection(collectionName).find({}).toArray();

  const response = rows ? rows : [];

  return NextResponse.json(response, {
    headers: {
      "Content-Type": "application/json", // Set the Content-Type header
    },
  });
}
