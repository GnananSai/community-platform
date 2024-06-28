// pages/api/event/[id].ts

import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import Event from '@/models/Event';

export async function GET(req: Request) {
    await dbConnect();
    const { pathname } = new URL(req.url);
    const id = pathname.split('/').pop();

    try {
        const event = await Event.findById(id);
        if (!event) {
            return NextResponse.json({ success: false, error: 'Event not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, event });
    } catch (error) {
        return NextResponse.json({ success: false, error: error }, { status: 400 });
    }
}
