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

export async function PUT(req: Request) {
    await dbConnect();
    try {

    const { pathname } = new URL(req.url);
    const id = pathname.split('/').pop();
    const { userId, join } = await req.json();
    if(!userId){
        return NextResponse.json({ success: false, error: 'Please provide userId' }, { status: 400 });
    }
    if(join){
        const community = await Community.findByIdAndUpdate(id, { $push: { members: userId } }, { new: true, runValidators: true });
        if (!community) {
            return NextResponse.json({ success: false, error: 'Community not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, community });
    }else{
        const community = await Community.findByIdAndUpdate(id, { $pull: { members: userId } }, { new: true, runValidators: true });
        if (!community) {
            return NextResponse.json({ success: false, error: 'Community not found' }, { status: 404 });
        }
        return NextResponse.json({ success: true, community });
    }
    }
    catch (error) {
        return NextResponse.json({ success: false, error: error }, { status: 400 });
    }
}

