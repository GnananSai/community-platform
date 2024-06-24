import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
// import User from '@/models/User';
import Event from '@/models/Event';
import Community from '@/models/Community';

export async function GET(req: Request) {
  await dbConnect();
  try {
    // const users = await User.find();
    const events = await Event.find();
    const communities = await Community.find();
    return NextResponse.json({ success: true, events, communities });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
