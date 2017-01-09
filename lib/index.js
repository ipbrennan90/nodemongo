
//Express Server
import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb'
import dotenv from 'dotenv';
import * as Models from './models/index';
const app = express();

const getMongoAddress = () => {
	if (process.env.NODE_ENV === 'development') return 'mongodb://localhost/temps-and-weights';
	if (process.env.NODE_ENV === 'production') return `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ds159208.mlab.com:59208/temps-and-weights`
	dotenv.load();
	return `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ds159208.mlab.com:59208/temps-and-weights`;
}

let mongoAddress = getMongoAddress();

MongoClient.connect(mongoAddress, (err, database) => {
	console.log(mongoAddress);
	if(err) return console.log(err);
	const db = database
	app.listen(3000, () => {
		console.log('listening on 3000')
	});

	// body-parser init
	app.use(bodyParser.urlencoded({extended: true}))

	// handling a get a request (a READ request to our server)
	app.get('/temps', (req, res) => {
		db.collection('temps').find().toArray((err, results) => {
			if(err) return console.log(err);
			res.send({temps: results})
		})
	});

	app.post('/temps', (req, res) => {
		console.log('in temps');
		var instance = new Models.Temp();
		instance.temp = req.body.temp;
		instance.save(err => {
			if(err) res.send(err);
			res.send('new temp added!');
		})
	});

})
