var express = require('express');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//include files
var config = require('./config/config');

var app = express();
var db; 

//parse json
app.use(bodyParser.json());

//set headers for cross origin
app.all('/*',function(req,res,next){

	res.header("Access-Control-Allow-Origin","*");//restricting to required domain
	res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE,OPTIONS");
	res.header("Access-Control-Allow-Headers","Content-type,Accept,X-Access-Token,X-Key");

	if(req.method == 'OPTIONS'){
		res.status(200).end();
	}else{
		next();
	}

})

app.use('/',require('./routes'));

//if no route is matched by now it must be 404

app.use(function(req,res,next){
	res.status(404).json({status:"Page not found"}).end();
});


//start server
app.set('port',config.port);


var server = app.listen(app.get('port'),function(){
	console.log("Express app listening on port" + server.address().port);
});


//Database Connection
mongoose.connect(config.mongo.url,function(err,database){
	if(err){
		console.log(err);
		process.exit(1);
	}

	//save database object from the callback for reuse
	db = database;
	console.log('Database Connection ready');
});

