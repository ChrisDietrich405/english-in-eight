// import mysql from "mysql2/promise";
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

// import mysql from "mysql2/promise";
// import { NextResponse } from "next/server";


// import clientPromise from "@/lib/mongodb";


// export async function GET() {
//   const connection = await mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "secret",
//     database: "english_in_eight",
//   });
//   const [rows] = await connection.execute("Show Tables");
//   const tables = rows.map((row) => row.Tables_in_english_in_eight);
//   console.log(tables);


//   //getting values for each verb


//   const client = await clientPromise;
//   const db = client.db("english_in_eight");
//   tables.forEach(async (table) => {
//     db.collection(table).drop(); //if already exists in mongo db delete and replace it with the mysql table
//     const [rows] = await connection.execute(`SELECT * FROM ${table}`);
//     rows.forEach((row) => {
//       delete(row.id);
//       db.collection(table).insertOne(row);
//     });
//   });


//   connection.end();
//   return NextResponse.json(rows);
// }

