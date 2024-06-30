import mongoose, { Schema, Document } from 'mongoose';

export interface ICommunity extends Document {
    name: string;
    description: string;
    members: [string];
    posts: [string];
    image_url: string;
    owner: string;
}

const CommunitySchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    members: { type: [String] },
    posts: { type: [String] },
    image_url: { type: String },
    owner: { type: String, required: true },
});

export default mongoose.models.Community || mongoose.model<ICommunity>('Community', CommunitySchema);
