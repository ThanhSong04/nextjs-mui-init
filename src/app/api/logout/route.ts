import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete('access_token');
  return NextResponse.json({ success: 'Logout successfully' }, { status: 200 });
}
