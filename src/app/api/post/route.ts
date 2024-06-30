import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import Post from '@/models/Posts';

// export async function GET(req: Request) {
//   await dbConnect();

//   try {
//     const data = await req.json();
//     const posts = await Post.find({communityId: data.communityId});
//     if (!posts) {
//       return NextResponse.json({ success: false, error: 'Posts not found' }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, posts: posts });
//   } catch (error: any) {
//     console.error(error);
//     return NextResponse.json({ success: false, error: error.message || 'Something went wrong' }, { status: 400 });
//   }
// }

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
