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
      }
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
        text: 'SELECT * FROM pagamentos WHERE id = $1',
        values: [id],
      }
    this._connection.query(query, callback)
}

PartnerDao.prototype.update = function(pagamento,callback) {
    const query = {
        text: 'UPDATE pagamentos SET forma_de_pagamento = $1, valor = $2, moeda = $3, status = $4',
        values: [pagamento.forma_de_pagamento, pagamento.valor, 'R', 'CONFIRMADO']
      }
    this._connection.query(query, callback)
    //this._connection.query('UPDATE pagamentos SET status = ? where id = ?', [pagamento.status, pagamento.id], callback)
}

module.exports = function(){
    return PartnerDao
}
