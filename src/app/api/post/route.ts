import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import Post from '@/models/Posts';


export async function POST(req: Request) {
  await dbConnect();
  try {
    const data = await req.json();
    const post = new Post(data);
    await post.save();
    return NextResponse.json({ success: true, post });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
