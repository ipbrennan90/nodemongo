'use strict';

//Express Server
var express = require('express');
var app = express();

// getting server to listen for connections
app.listen(3000, function () {
	console.log('listening on 3000');
});

// handling a get a request (a READ request to our server)
app.get('/', function (req, res) {
	//__dirname is directory that contains JS source code.
	res.sendFile(__dirname + '/index.html');
});