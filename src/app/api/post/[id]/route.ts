import { NextResponse } from 'next/server';
import { dbConnect } from '@/lib/db';
import Post from '@/models/Posts';

export async function GET(req: Request) {
  await dbConnect();

  try {
    const { pathname } = new URL(req.url);
    const id = pathname.split('/').pop();
    const posts = await Post.find({ communityId: id});
    if (!posts) {
      return NextResponse.json({ success: false, error: 'Posts not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, posts: posts });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message || 'Something went wrong' }, { status: 400 });
  }
}

export async function PUT(req: Request) {
  await dbConnect();
  try {

  const { pathname } = new URL(req.url);
  const id = pathname.split('/').pop();
  const { userId, like } = await req.json();
  if(!userId){
      return NextResponse.json({ success: false, error: 'Please provide userId' }, { status: 400 });
  }
  if(like){
      const post = await Post.findByIdAndUpdate(id, { $pull: { likes: userId } }, { new: true, runValidators: true });
      if (!post) {
          return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, post });
  }else{
      const post = await Post.findByIdAndUpdate(id, { $push: { likes: userId } }, { new: true, runValidators: true });
      if (!post) {
          return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 });
      }
      return NextResponse.json({ success: true, post });
  }
  }
  catch (error) {
      return NextResponse.json({ success: false, error: error }, { status: 400 });
  }
}