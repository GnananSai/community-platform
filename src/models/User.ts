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
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  current_location?: {
    type: string;
    coordinates: [number, number];
  };
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
  address: { type: String },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  current_location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
    },
  },
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
