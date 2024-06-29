import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import User from '@/models/User';

export async function POST(req: Request) {
  await dbConnect();

  try {
    const data = await req.json();
    // console.log(data);
    const user = await User.findByIdAndUpdate(data.id, {$set: data.userDetails}, { new: true });
    // console.log(user);
    if (!user) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, user });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message || 'Something went wrong' }, { status: 400 });
  }
}

export async function GET(req: Request) {
  await dbConnect();
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get('id');
    const user = await User.findById(id);

    return NextResponse.json({ success: true, user: user });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
