'use strict';
module.exports = function(app) {
  var pessoaController = require('../controllers/pessoaController.js');

  app.route('/')
    .get(function(req, res){
      res.json({message: 'API is running'});
    });
  // todoList Routes
  app.route('/pessoa')
    .get(pessoaController.getAll)
    .post(pessoaController.create);


  app.route('/pessoa/:pessoaId')
    .get(pessoaController.read)
    .put(pessoaController.update)
    .delete(pessoaController.delete);
};