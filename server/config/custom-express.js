var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function(){
  var app = express();

  app.set('view engine','ejs'); //set EJS module as a PAGE DYNAMIC ENGINE
  //app.set('views','./app/views'); //set onde estao as VIEWS - O default é sempre /views
  //mantive o default

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use(expressValidator());

  //o modulo consign vai INJETAR a variavel APP para os arquivos desses diretorios, nao sendo necessario o
  // var rota = require('./app/controllers/rota')(app); para usar CADA arquivo de rota
  //antes era usado o express-load, evitando-se assim tanto require na pagina inicial do app
  consign()
   .include('controllers')
   .then('persistencia')
   .then('util')
   .into(app);

   //a ordem do consign deve seguir a ordem de 'dependencia'

  return app;
}
