var express = require('express')
var consign = require('consign')
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')

var morgan = require('morgan')
var logger = require('../service/logger.js')

module.exports = ()=>{
  var app = express()

  //Middleware do Morgan
  app.use(morgan("common", {
    stream: {
      write: function(mensagem){
          logger.info(mensagem)
      }
    }
  }))

  app.set('view engine','ejs') //set EJS module as a PAGE DYNAMIC ENGINE
  app.set('views','./static') //set onde estao as VIEWS - O default é sempre /views
  //mantive o default

  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())

  app.use(expressValidator())

  //o modulo consign vai INJETAR a variavel APP para os arquivos desses diretorios, nao sendo necessario o
  // var rota = require('./app/controllers/rota')(app) para usar CADA arquivo de rota
  //antes era usado o express-load, evitando-se assim tanto require na pagina inicial do app
  consign()
   .include('controllers')
   .then('persistence')
   .then('service')
   //.then('util')
   .into(app)

   //a ordem do consign deve seguir a ordem de 'dependencia'

  return app
}
