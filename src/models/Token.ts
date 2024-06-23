import mongoose, { Schema, Document } from 'mongoose';

export interface IToken extends Document {
    token: string;
}

const TokenSchema: Schema = new Schema({
    token: { type: String, required: true },
});

export default mongoose.models.Token || mongoose.model<IToken>('Token', TokenSchema);
