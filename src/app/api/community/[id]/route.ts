// pages/api/event/[id].ts

import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import Community from '@/models/Community';

export async function GET(req: Request) {
    await dbConnect();
    const { pathname } = new URL(req.url);
    const id = pathname.split('/').pop();

    try {
        const community = await Community.findById(id);
        if (!community) {
            return NextResponse.json({ success: false, error: 'Community not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, community });
    } catch (error) {
        return NextResponse.json({ success: false, error: error }, { status: 400 });
    }
}
