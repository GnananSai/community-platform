import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { dbConnect } from '@/lib/db';
import User from '@/models/User';
import Token from '@/models/Token';

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function POST(req: Request) {
  await dbConnect();
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ success: false, message: 'Please provide email and password' }, { status: 400 });
    }
    // console.log(email, password);
    const user = await User.findOne({ email });
    // console.log(user);
    if (!user) {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    // console.log(isMatch);
    if (!isMatch) {
      return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 400 });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    // console.log(token);
    const newToken = new Token({ token });
    await newToken.save();

    return NextResponse.json({ success: true, token, user: user.toJSON()});
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
