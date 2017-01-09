import mongoose from 'mongoose';
import {TempModel} from './temp';
import {config} from '../config';
const mongoAddress = `mongodb://${config.mongoUser}:${config.mongoPass}@ds159208.mlab.com:59208/temps-and-weights`

mongoose.connect(mongoAddress);

export const Temp = mongoose.model('Temp', TempModel);
