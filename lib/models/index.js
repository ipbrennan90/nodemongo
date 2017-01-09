import mongoose from 'mongoose';
import {TempModel} from './temp';

const getMongoAddress = () => {
	// need to make into switch case
	if (process.env.NODE_ENV === 'development') return 'mongodb://localhost/temps-and-weights';
	if (process.env.NODE_ENV === 'production') return `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ds159208.mlab.com:59208/temps-and-weights`
	if (process.env.NODE_ENV === 'stage') {
		const dotenv = require('dotenv');
		dotenv.load()
		return `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ds159208.mlab.com:59208/temps-and-weights`
	}

}
const mongoAddress = getMongoAddress()

mongoose.connect(mongoAddress);

export const Temp = mongoose.model('Temp', TempModel);
