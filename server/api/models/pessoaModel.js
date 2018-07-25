'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// It is how our collection should look like
// Schema
var PessoaSchema = new Schema({
	nome: {
		type: String, 
		required: true, 
		trim: true
	},
	sobrenome: {
		type: String, 
		required: true, 
		trim: true
	},
	enderecos:[
		{
			cep:{
				type: String, 
				required: true, 
				trim: true
			},
			descricao:{
				type: String, 
				required: true, 
				trim: true
			}
		}
	]
});

module.exports = mongoose.model('Pessoas', PessoaSchema);