import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import Service from '@/models/Service';

export async function POST(req: Request) {
  await dbConnect();
  try {
    const {name, description, image_url} = await req.json();
    if (!name || !description) {
      return NextResponse.json({ success: false, message: 'Please provide name and description' }, { status: 400 });
    }
    const newService = new Service({ name, description, image_url });
    const service = await newService.save();
    return NextResponse.json({ success: true, service});
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}

export async function GET(req: Request) {
    await dbConnect();
    try {
        const services = await Service.find();
        return NextResponse.json({ success: true, services });
    } catch (error) {
      return NextResponse.json({ success: false, error }, { status: 400 });
    }
  }
