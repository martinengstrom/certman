var express = require('express');
var app = express();

// Routes
require('./router')(app);

// Static files
app.use(express.static('static'));

// Listen
app.listen(3000, function() {
	console.log('Listening');
});
