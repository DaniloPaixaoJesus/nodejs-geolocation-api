const { Pool, Client } = require('pg')

function createDBConnectionPostGres(){
	const client = new Client({
		user: 'postgres',
		host: 'localhost',
		database: 'payfast',
		password: '123456',
		port: 5432,
	  })
	  client.connect()
	return client;
}
module.exports = ()=> createDBConnectionPostGres
