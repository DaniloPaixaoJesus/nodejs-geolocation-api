var mongoose = require('mongoose');
let env = process.env.NODE_ENV;
if(!env){
	env = 'development'
}
var config = require(`../config/config.${env}.json`);
	
function connectionFactoryMongoDb(){
	
	let uri = `mongodb://${config.databaseConfig.host}:27017/${config.databaseConfig.database}`
	mongoose.connect(uri);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	  // we're connected!
	  console.log(' ===> MONGODB connected')
	})
	return db
}

module.exports = function() {
	return connectionFactoryMongoDb
}
