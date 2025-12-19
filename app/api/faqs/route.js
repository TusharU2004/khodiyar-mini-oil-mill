// app/api/faqs/route.js
import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

// GET => list faqs
export async function GET() {
  try {
    const db = await createConnection();
    const [rows] = await db.query(
      `SELECT id, question, answer, page, status, created_at, updated_at
       FROM faqs
       WHERE status = 1
       ORDER BY id DESC`
    );
    return NextResponse.json(rows);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// POST => create faq
export async function POST(req) {
    try {
        const body = await req.json();
        const { question, answer } = body;

        if (!question || !answer) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const db = await createConnection();

        const [result] = await db.query(
            `INSERT INTO faqs (question, answer, page, status, created_at)
             VALUES (?, ?, 'faq', 1, NOW())`,
            [question, answer]
        );

        return NextResponse.json({ success: true, id: result.insertId }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

// PUT => update faq
export async function PUT(req) {
    try {
        const body = await req.json();
        const { id, question, answer } = body;

        if (!id || !question || !answer) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const db = await createConnection();

        await db.query(
            `UPDATE faqs SET question = ?, answer = ? WHERE id = ?`,
            [question, answer, id]
        );

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

// DELETE => delete faq
export async function DELETE(req) {
    try {
        const body = await req.json();
        const { id } = body;

        if (!id) {
            return NextResponse.json({ error: 'Missing required field: id' }, { status: 400 });
        }

        const db = await createConnection();

        await db.query(`DELETE FROM faqs WHERE id = ?`, [id]);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
