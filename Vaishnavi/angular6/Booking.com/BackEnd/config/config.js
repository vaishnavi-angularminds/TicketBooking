var config = {
	
	port:8081,

	//database credentials
	mongo:{

		hostname:'localhost',
		port:'27017',
		db:'ticketBookingDb'
	}
};

config.mongo.url = 'mongodb://' + config.mongo.hostname + ':' + config.mongo.port + '/' + config.mongo.db;

module.exports = config;