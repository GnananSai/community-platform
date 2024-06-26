import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  completedProfile: boolean;
  name?: string;
  gender?: number;
  dob?: Date;
  age?: number;
  image_url?: string;
  city?: string;
  state?: string;
  country?: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true, match: [/.+\@.+\..+/, 'Please provide a valid email address'] },
  password: { type: String, required: true },
  completedProfile: { type: Boolean, default: false },
  name: { type: String },
  gender: { type: Number },
  dob: { type: Date },
  age: { type: Number },
  image_url: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
});

export type UserDocument = IUser & Document;

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
