var mysql  = require('mysql')

function createDBConnectionMySql(){
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'root',
			database: 'geolocationdb'
		})
}

module.exports = function() {
	return createDBConnectionMySql
}
