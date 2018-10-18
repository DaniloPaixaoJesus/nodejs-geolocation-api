let env = process.env.NODE_ENV;
if(!env){
	env = 'development';
}
var config = require(`../config/config.${env}.json`);
	
function connectionFactoryMongoDbDriver(){//callback
	var MongoClient = require('mongodb').MongoClient;
	const uri = `mongodb://${config.databaseConfig.host}:27017/${config.databaseConfig.database}`;
	//MongoClient.connect(uri, callback);
	return MongoClient.connect(uri);
}

module.exports = function() {
	return connectionFactoryMongoDbDriver;
}