import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

// Database connection
const db = mysql.createPool({
  host: 'localhost',            // MySQL server host
  user: 'root',                 // MySQL username
  password: '1432',             // MySQL password
  database: 'automation_testing', // Your database name
  port: 3306,                   // MySQL default port (unless changed)
});

// Sentry Error Testing Route
export function GET() {
  throw new Error("Sentry Example API Route Error");
}

// Enrollment Form Submission Route
export async function POST(req) {
  try {
    const body = await req.json();

    // Validate input
    if (!body.name || !body.email || !body.phone || !body.course) {
      return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
    }

    // Insert data into MySQL
    const query = "INSERT INTO enrollments (name, email, phone, course) VALUES (?, ?, ?, ?)";
    const values = [body.name, body.email, body.phone, body.course];

    const [result] = await db.execute(query, values);

    return NextResponse.json({ message: "Enrollment successful!", id: result.insertId }, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
