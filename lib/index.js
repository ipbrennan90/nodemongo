
//Express Server
const express = require('express');
const app = express();

// getting server to listen for connections
app.listen(3000, function() {
	console.log('listening on 3000');
});

// handling a get a request (a READ request to our server)
app.get('/', function (req, res) {
	res.send('Hello World');
});
