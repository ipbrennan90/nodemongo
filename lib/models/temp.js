import mongoose from 'mongoose';
const Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
export const TempModel = new Schema({
	id: ObjectId,
	temp: String
})
