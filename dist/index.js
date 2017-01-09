'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongodb = require('mongodb');

var _index = require('./models/index');

var Models = _interopRequireWildcard(_index);

var _config = require('./config');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
//Express Server


var getMongoAddress = function getMongoAddress() {
	if (process.env.NODE_ENV === 'development') return 'mongodb://localhost/temps-and-weights';
	if (process.env.NODE_ENV === 'production') return 'mongodb://' + (process.env.MONGO_USER || _config.config.mongoUser) + ':' + (process.env.MONGO_PASS || _config.config.mongoPass) + '@ds159208.mlab.com:59208/temps-and-weights';
};

var mongoAddress = getMongoAddress();

_mongodb.MongoClient.connect(mongoAddress, function (err, database) {
	console.log(mongoAddress);
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
		console.log('in temps');
		var instance = new Models.Temp();
		instance.temp = req.body.temp;
		instance.save(function (err) {
			if (err) res.send(err);
			res.send('new temp added!');
		});
	});
});