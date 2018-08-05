function PartnerDao(connection) {
    this._connection = connection
}
PartnerDao.prototype.save = function(partner,callback) {
/**
name varchar(255) NOT NULL,
description text NOT NULL,
activated boolean NOT NULL,
created_at TIMESTAMP NOT NULL,
created_by numeric NOT NULL,
updated_at TIMESTAMP,
updated_by numeric
*/
    const query = {
        text: `INSERT INTO 
                partner(name, description, activated, created_at) 
                VALUES ($1, $2, $3, now())`,
        values: [partner.name, partner.description, true],
      } //new Date
    this._connection.query(query, callback)
}

/*PartnerDao.prototype.salvaOld = function(pagamento,callback) {
    this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback)
}*/

PartnerDao.prototype.getAll = function(callback) {
    this._connection.query('SELECT * FROM partner',callback)
}

PartnerDao.prototype.findById = function (id,callback) {
    const query = {
        text: 'SELECT * FROM partner WHERE id = $1',
        values: [id],
      }
    this._connection.query(query, callback)
}

PartnerDao.prototype.update = function(partner,callback) {
    const query = {
        text: 'UPDATE partner SET name = $1, description = $2 WHERE id = $3',
        values: [partner.name, partner.description, partner.id]
      }
    this._connection.query(query, callback)
    //this._connection.query('UPDATE pagamentos SET status = ? where id = ?', [pagamento.status, pagamento.id], callback)
}

module.exports = function(){
    return PartnerDao
}
