import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET() {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "secret",
    database: "english_in_eight",
  });

  const [rows] = await connection.execute("SELECT * FROM simple_present");
  connection.end();
  return NextResponse.json(rows);
}
