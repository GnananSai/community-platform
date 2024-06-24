import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
    name: string;
    description: string;
    image_url: string;
}

const ServiceSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    members: { type: [String] },
    image_url: { type: String },
});

export default mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);
