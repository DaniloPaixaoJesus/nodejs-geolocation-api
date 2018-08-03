function PagamentoDao(connection) {
    this._connection = connection;
}
PagamentoDao.prototype.salva = function(pagamento,callback) {
    const query = {
        text: 'INSERT INTO pagamentos(forma_de_pagamento, valor, moeda, status) VALUES ( $1, $2, $3, $4 )',
        values: [pagamento.forma_de_pagamento, pagamento.valor, 'R', 'CONFIRMADO'],
      }
    this._connection.query(query, callback)
}

PagamentoDao.prototype.salvaOld = function(pagamento,callback) {
    this._connection.query('INSERT INTO pagamentos SET ?', pagamento, callback);
}

PagamentoDao.prototype.lista = function(callback) {
    this._connection.query('select * from pagamentos',callback);
}

PagamentoDao.prototype.buscaPorId = function (id,callback) {
    this._connection.query("select * from pagamentos where id = ?",[id],callback);
}

PagamentoDao.prototype.atualiza = function(pagamento,callback) {
    this._connection.query('UPDATE pagamentos SET status = ? where id = ?', [pagamento.status, pagamento.id], callback);
}

module.exports = function(){
    return PagamentoDao;
};
