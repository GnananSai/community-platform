import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import Community from '@/models/Community';

export async function POST(req: Request) {
  await dbConnect();
  try {
    const {name, description, members, image_url} = await req.json();
    if (!name || !description) {
      return NextResponse.json({ success: false, message: 'Please provide name and description' }, { status: 400 });
    }
    const newCommunity = new Community({ name, description, members, image_url });
    const community = await newCommunity.save();
    return NextResponse.json({ success: true, Community: community});
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
