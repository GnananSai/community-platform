import mongoose, { Schema, Document } from 'mongoose';

export interface IEvent extends Document {
    name: string;
    date: Date;
    description: string;
    location?: string
    image_url?: string;
    
}

const EventSchema: Schema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true},
    image_url: { type: String },
});

export default mongoose.models.Event || mongoose.model<IEvent>('Event', EventSchema);
