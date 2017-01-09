'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongodb = require('mongodb');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Express Server
var app = (0, _express2.default)();
var mongoAddress = 'mongodb://' + _config.config.mongoUser + ':' + _config.config.mongoPass + '@ds159208.mlab.com:59208/temps-and-weights';
// mongodb init
_mongodb.MongoClient.connect(mongoAddress, function (err, database) {
	if (err) return console.log(err);
	var db = database;
	app.listen(3000, function () {
		console.log('listening on 3000');
	});

	// body-parser init
	app.use(_bodyParser2.default.urlencoded({ extended: true }));

	// handling a get a request (a READ request to our server)
	app.get('/temps', function (req, res) {
		db.collection('temps').find().toArray(function (err, results) {
			if (err) return console.log(err);
			res.send({ temps: results });
		});
	});

	app.post('/temps', function (req, res) {
		db.collection('temps').save(req.body, function (err, result) {
			if (err) return console.log(err);
			console.log('saved to database');
			res.send('success');
		});
	});
});