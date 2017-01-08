
//Express Server
const express = require('express');
const app = express();

// getting server to listen for connections
app.listen(3000, function() {
	console.log('listening on 3000');
});
