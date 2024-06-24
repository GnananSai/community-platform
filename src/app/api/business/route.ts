import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import Business from '@/models/Business';

export async function POST(req: Request) {
  await dbConnect();
  try {
    const {name, description, image_url} = await req.json();
    if (!name || !description) {
      return NextResponse.json({ success: false, message: 'Please provide name and description' }, { status: 400 });
    }
    const newBusiness = new Business({ name, description, image_url });
    const business = await newBusiness.save();
    return NextResponse.json({ success: true, business});
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}

export async function GET(req: Request) {
    await dbConnect();
    try {
        const businesses = await Business.find();
        return NextResponse.json({ success: true, businesses });
    } catch (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }
  }
