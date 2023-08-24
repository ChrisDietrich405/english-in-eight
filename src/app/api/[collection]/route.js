import mysql from "mysql2/promise";
import { NextResponse } from "next/server";

import clientPromise from "@/lib/mongodb";

export async function GET(req, { params }) {
  // const connection = await mysql.createConnection({
  //   host: "localhost",
  //   user: "root",
  //   password: "secret",
  //   database: "english_in_eight",
  // });

  const client = await clientPromise;
  const db = client.db("english_in_eight");

  const collectionName = params.collection.replace(/-/g, "_");
  const rows = await db.collection(collectionName).find({}).toArray();

  // const [rows] = await connection.execute(`SELECT * FROM ${collectionName}`);
  // connection.end();
  return NextResponse.json(rows);
}
