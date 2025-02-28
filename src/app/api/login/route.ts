import axiosClient from '@/api/axios-client';
import { ApiResponse } from '@/models/api-response';
import { User } from '@/models/user';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export interface Data {
  user: User;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`;

    const response: ApiResponse<Data> = await axiosClient.post(url, body);
    if (!response.success) {
      return NextResponse.json({ error: 'Login failed' }, { status: 500 });
    }

    const cookieStore = await cookies();
    const accessToken = btoa(`${body.username}:${body.password}`);
    cookieStore.set('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'lax',
      expires: new Date(response.data.user.validTo),
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
