//set up
var express = require('express');
	app = express();									// create app with express
	bodyParser = require('body-parser');				// pull info from HTML POST
	morgan = require('morgan');							// reuest logger
	methodOverride = require('method-override');		// simulate DELETE and PUT
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

app.use(bodyParser.json());								// parse application/json
app.use(bodyParser.urlencoded({extended : true}));		// parse application/x-www-form-urlencoded
app.use(morgan('dev'));									// log concise output (colored by response status) for development

app.use(express.static(__dirname + '/public'));			// set static files location /public


// listen (start app with node server.js) 
app.listen(8080);
console.log("App listening on port 8080");
