
//Express Server
import express from 'express';
import bodyParser from 'body-parser';
import {MongoClient} from 'mongodb'
import {config} from './config'
const app = express();
const mongoAddress = `mongodb://${config.mongoUser}:${config.mongoPass}@ds159208.mlab.com:59208/temps-and-weights`
// mongodb init
MongoClient.connect(mongoAddress, (err, database) => {
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
		db.collection('temps').save(req.body, (err, result) => {
			if (err) return console.log(err);
			console.log('saved to database');
			res.send('success')
		})
	});

})
