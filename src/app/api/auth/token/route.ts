import { NextResponse } from 'next/server';
import { dbConnect, disconnect } from '@/lib/db';
import Token from '@/models/Token';

export async function GET(req: Request) {
  await dbConnect();
  try {
    const token = await Token.findOne({ token: req.headers.get('Authorization')?.split(' ')[1] });

    return NextResponse.json({ success: true, token: token }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
