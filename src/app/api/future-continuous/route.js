import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { AiOutlineConsoleSql } from "react-icons/ai";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("english_in_eight");

  const rows = await db.collection("future_continuous").find({}).toArray();
  console.log(rows);

  return NextResponse.json(rows);
}
