// app/api/admin/logout/route.js
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    cookies().delete('session');
    return NextResponse.json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Logout API Error:', error.message);
    return NextResponse.json({ message: 'Server error', error: error.message }, { status: 500 });
  }
}
