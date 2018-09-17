//const https = require('https')
function VehicleMongoDao(app) {
    this._app = app;
}
VehicleMongoDao.prototype.save = function(partner,callback) {
    // const query = {
    //     text: `INSERT INTO 
    //             partner(name, description, activated, created_at, created_by) 
    //             VALUES ($1, $2, $3, now(), 1)`,
    //     values: [partner.name, partner.description, true],
    //   }
    // this._connection.query(query, callback)
}

VehicleMongoDao.prototype.getAll = function() {
    let posts = [{nome:'danilo 22222 ALL=>'},{nome: 'nnn nnnnn nnnn  nn'}];
    return posts;

    // this._connection.query('SELECT * FROM partner',callback)
}

VehicleMongoDao.prototype.findById = function (id,callback) {
    // const query = {
    //     text: 'SELECT * FROM partner WHERE id = $1',
    //     values: [id],
    //   }
    // this._connection.query(query, callback)
}

VehicleMongoDao.prototype.update = function(partner,callback) {
    // const query = {
    //     text: 'UPDATE partner SET name = $1, description = $2 WHERE id = $3',
    //     values: [partner.name, partner.description, partner.id]
    //   }
    // this._connection.query(query, callback)
    //this._connection.query('UPDATE pagamentos SET status = ? where id = ?', [pagamento.status, pagamento.id], callback)
}

module.exports = function(){
    return VehicleMongoDao
}
