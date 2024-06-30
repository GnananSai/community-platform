import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import User from '@/models/User';

export async function POST(req: Request) {
  await dbConnect();

  try {
    const data = await req.json();
    const { id, userDetails } = data;
    
    const user = await User.findByIdAndUpdate(id, { $set: userDetails }, { new: true });
    
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
    
    if (!id) {
      return NextResponse.json({ success: false, error: 'ID parameter is missing' }, { status: 400 });
    }

    const user = await User.findById(id);
    
    if (!user) {
      return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, user });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message || 'Something went wrong' }, { status: 400 });
  }
}
