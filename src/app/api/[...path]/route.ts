import axios from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const cookieStore = await cookies();
    const access_token = cookieStore.get('access_token')?.value || '';
    const { pathname } = new URL(req.url);
    const backendUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`;
    const response = await axios.get(backendUrl, {
      headers: {
        Authorization: `Basic ${access_token}`,
      },
    });
    return NextResponse.json(response.data);
  } catch (err) {
    console.error('Error:', err);

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  return NextResponse.json(
    { message: 'Hello World POTS', req },
    { status: 200 },
  );
}
