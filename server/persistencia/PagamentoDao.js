function PagamentoDao(connection) {
    this._connection = connection
}
PagamentoDao.prototype.salva = function(pagamento,callback) {
    const query = {
        text: 'INSERT INTO pagamentos(id, forma_de_pagamento, valor, moeda, status) VALUES ( $1, $2, $3, $4, $5)',
        values: [pagamento.id, pagamento.forma_de_pagamento, pagamento.valor, 'R', 'CONFIRMADO'],
      }
    this._connection.query(query, callback)
}

/*PagamentoDao.prototype.salvaOld = function(pagamento,callback) {
    this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback)
}*/

PagamentoDao.prototype.lista = function(callback) {
    this._connection.query('SELECT * FROM pagamentos',callback)
}

PagamentoDao.prototype.buscaPorId = function (id,callback) {
    const query = {
        text: 'SELECT * FROM pagamentos WHERE id = $1',
        values: [id],
      }
    this._connection.query(query, callback)
}

PagamentoDao.prototype.atualiza = function(pagamento,callback) {
    const query = {
        text: 'UPDATE pagamentos SET forma_de_pagamento = $1, valor = $2, moeda = $3, status = $4',
        values: [pagamento.forma_de_pagamento, pagamento.valor, 'R', 'CONFIRMADO']
      }
    this._connection.query(query, callback)
    //this._connection.query('UPDATE pagamentos SET status = ? where id = ?', [pagamento.status, pagamento.id], callback)
}

module.exports = function(){
    return PagamentoDao
}
