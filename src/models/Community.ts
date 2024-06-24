import mongoose, { Schema, Document } from 'mongoose';

export interface ICommunity extends Document {
    name: string;
    description: string;
    members: [string];
    image_url: string;
}

const CommunitySchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    members: { type: [String] },
    image_url: { type: String },
});

export default mongoose.models.Community || mongoose.model<ICommunity>('Community', CommunitySchema);
