import mongoose from 'mongoose';
import {TempModel} from './temp';
import {config} from '../config';
const mongoAddress = config.getMongoAddress()

mongoose.connect(mongoAddress);

export const Temp = mongoose.model('Temp', TempModel);
