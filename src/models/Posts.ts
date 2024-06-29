import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IPost extends Document {
    title: string;
    description: string;
    img_url: string;
    userId: string;
    communityId: string;
    createdAt: Date;
    type: 'report' | 'post';
    likes: [string];
}

const PostSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    img_url: { type: String },
    userId: { type: String, required: true },
    communityId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    type: { type: String, enum: ['report', 'post'], default: 'post' },
    likes: { type: [String] },
});

export default mongoose.models.Post || mongoose.model<IPost>('Post', PostSchema);
