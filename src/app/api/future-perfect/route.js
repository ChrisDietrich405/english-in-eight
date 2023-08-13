import { NextResponse } from "next/server"
import mysql from "mysql2/promise"

export async function GET() {
    const connect = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "secret",
        database: "english_in_eight",
    })
    const [rows ] = await connect.execute("SELECT * FROM future_perfect")
    connect.end()
    return NextResponse.json(rows)
}