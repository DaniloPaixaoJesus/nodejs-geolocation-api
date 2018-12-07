const { Pool, Client } = require('pg')

function createDBConnectionPostGres(){
	const client = new Client({
		user: 'fzxhpuct',
		host: 'stampy.db.elephantsql.com',
		database: 'fzxhpuct',
		password: 'GX-5ocQbQQByTu_ehCdqlUWutvZKvI21',
		port: 5432,
	  })
	  client.connect()
	return client;
}
module.exports = ()=> createDBConnectionPostGres
