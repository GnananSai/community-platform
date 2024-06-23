import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { dbConnect, disconnect } from '@/lib/db';
import User from '@/models/User';

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { email, password, confirmPassword } = await req.json();

    if (password !== confirmPassword) {
      return NextResponse.json({ success: false, message: 'Passwords do not match' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    return NextResponse.json({ success: true, message: 'User created' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
