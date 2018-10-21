let env = process.env.NODE_ENV;
if(!env){
	env = 'development';
}
var config = require(`../environment/env.${env}.json`);
	
async function connectionFactoryMongoDriver(){//callback
	var mongoClient = require('mongodb').MongoClient;
	const uri = `mongodb://${config.databaseConfig.host}:27017/${config.databaseConfig.database}`;
	var mongoClient = require('mongodb').MongoClient;
	const client = await mongoClient.connect(uri);
	const db = client.db(`${config.databaseConfig.database}`);
	return new Promise((resolve, reject) => {
							resolve(db);
						});
}

module.exports = function() {
	return connectionFactoryMongoDriver;
}