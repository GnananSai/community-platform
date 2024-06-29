import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  completedProfile: boolean;
  name?: string;
  gender?: string;
  dob?: Date;
  image_url?: string;
  city?: string;
  state?: string;
  country?: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true, match: [/.+\@.+\..+/, 'Please provide a valid email address'] },
  password: { type: String, required: true },
  completedProfile: { type: Boolean, default: false },
  name: { type: String, default: ''},
  gender: { type: String, default: ''},
  dob: { type: Date, default: null},
  image_url: { type: String, default: ''},
  city: { type: String, default: ''},
  state: { type: String, default: ''},
  country: { type: String, default: ''},
});

export type UserDocument = IUser & Document;

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
