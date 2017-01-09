import mongoose from 'mongoose';
import {TempModel} from './temp';
const getMongoAddress = () => {
	if (process.env.NODE_ENV === 'development') return 'mongodb://localhost/temps-and-weights';
	if (process.env.NODE_ENV === 'production') return `mongodb://${process.env.MONGO_USER || config.mongoUser}:${process.env.MONGO_PASS || config.mongoPass}@ds159208.mlab.com:59208/temps-and-weights`
}
const mongoAddress = getMongoAddress()

mongoose.connect(mongoAddress);

export const Temp = mongoose.model('Temp', TempModel);
