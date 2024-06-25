import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import User from '@/models/User';

export async function POST(req: Request) {
  await dbConnect();
  try {
    const data = await req.json();
    const { id, ...userData } = data;
    const user = await User.findByIdAndUpdate(id, userData, { new: true });

    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json({ success: false, error}, { status: 400 });
  }
}

export async function GET(req: Request) {
  await dbConnect();
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    const user = await User.findById(id);

    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
