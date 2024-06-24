import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import Event from '@/models/Event';

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { name, description, date, location, image_url } = await req.json();
    if (!name || !description || !date) {
      return NextResponse.json({ success: false, message: 'Please provide name, description and date' }, { status: 400 });
    }
    const newEvent = new Event({ name, description, date, location, image_url });
    const event = await newEvent.save();
    return NextResponse.json({ success: true, event});
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}

export async function GET(req: Request) {
    await dbConnect();
    try {
        const events = await Event.find();
        return NextResponse.json({ success: true, events });
    } catch (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }
  }