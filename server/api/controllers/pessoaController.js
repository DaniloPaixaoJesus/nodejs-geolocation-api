'use strict';

var mongoose = require('mongoose'),
Pessoa = mongoose.model('Pessoas');

exports.getAll = function(req, res) {
  res.json({message: 'get all mehtod called'});
  /*Pessoa.find({}, function(err, pessoa) {
    if (err)
      res.send(err);
    res.json(task);
  });*/
};

exports.create = function(req, res) {
  var novaPessoa = new Pessoa(req.body);
  novaPessoa.save(function(err, pessoa) {
    if (err)
      res.send(err);
    res.json(pessoa);
  });
};


exports.read = function(req, res) {
  Pessoa.findById(req.params.pessoaId, function(err, pessoa) {
    if (err)
      res.send(err);
    res.json(pessoa);
  });
};


exports.update = function(req, res) {
  Pessoa.findOneAndUpdate({_id: req.params.pessoaId}, req.body, {new: true}, function(err, pessoa) {
    if (err)
      res.send(err);
    res.json(pessoa);
  });
};


exports.delete = function(req, res) {
  Pessoa.remove({
    _id: req.params.pessoaId
  }, function(err, pessoa) {
    if (err)
      res.send(err);
    res.json({ message: 'Pessoa removida com sucesso' });
  });
};


