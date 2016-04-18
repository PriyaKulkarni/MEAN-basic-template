//set up
var express = require('express');
	app = express();									// creates app with express
	morgan = require('morgan');							// OPTIONAL-logs incoming requests to console
	mongoose = require('mongoose');						// mongoose for mongoDB
 
 //configuration

 	db = mongoose.connect('mongodb://127.0.0.1:27017/test', function(err) {			//connect to mongoDB locally
		if (err) {
			console.error('Could not connect to MongoDB!');
			console.log(err);
		} else {
			console.log('Successfully connected to MongoDB');
		}
	});

app.use(morgan('dev'));										// log concise output to console for development 

app.use(express.static(__dirname + '/public'));				// set static files location /public

// load HTML view file
app.get('/', function(req, res) {
	res.redirect('/index.html');
});

// listen (start app with node server.js) 
app.listen(8080);
console.log("App listening on port 8080");