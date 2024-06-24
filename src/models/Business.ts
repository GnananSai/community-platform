import mongoose, { Schema, Document } from 'mongoose';

export interface IBusiness extends Document {
    name: string;
    description: string;
    image_url: string;
}

const BusinessSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image_url: { type: String },
});

export default mongoose.models.Business || mongoose.model<IBusiness>('Business', BusinessSchema);
