var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Create model variable
var PessoaSchema = new Schema({
	nome: {type: String, required: true, trim: true},
	sobrenome: {type: String, required: true, trim: true}
});

module.exports = mongoose.model('Pessoa', PessoaSchema);