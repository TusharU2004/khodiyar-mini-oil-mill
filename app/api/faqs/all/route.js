// app/api/faqs/all/route.js
import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

// GET => list all faqs
export async function GET() {
  try {
    const db = await createConnection();
    const [rows] = await db.query(
      `SELECT id, question, answer, page, status, created_at, updated_at
       FROM faqs
       ORDER BY id DESC`
    );
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
