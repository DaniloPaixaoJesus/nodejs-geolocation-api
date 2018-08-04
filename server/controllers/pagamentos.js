module.exports = function(app){
  app.get('/pagamentos', function(req, res){
    console.log('Recebida requisicao de teste na porta 3000.')
    res.send('OK.');
  });

  /**
  res.status(400);
  res.format({
    html: function(){
        res.render("produtos/form",{validationErrors:errors,produto:produto});
    },
    json: function(){
        res.send(errors);
    }
  });
   */

  const PAGAMENTO_CRIADO = "CRIADO";
  const PAGAMENTO_CONFIRMADO = "CONFIRMADO";
  const PAGAMENTO_CANCELADO = "CANCELADO";

  app.get('/pagamentos/pagamento/:id', function(req, res){
    var id = req.params.id;
    console.log('consultando pagamento: ' + id);

    var memcachedClient = app.servicos.memcachedClient();

    memcachedClient.get('pagamento-' + id, function(erro, retorno){
      if (erro || !retorno){
        console.log('MISS - chave nao encontrada');

        var connection = app.persistencia.connectionFactory();
        var pagamentoDao = new app.persistencia.PagamentoDao(connection);

        pagamentoDao.buscaPorId(id, function(erro, resultado){
          if(erro){
            console.log('erro ao consultar no banco: ' + erro);
            res.status(500).send(erro);
            return;
          }
          console.log('pagamento encontrado: ' + JSON.stringify(resultado));
          res.json(resultado);
          return;
        });
        //HIT no cache
      } else {
        console.log('HIT - valor: ' + JSON.stringify(retorno));
        res.json(retorno);
        return;
      }
    });

  });

  //Content negotiation -> ver retornos de formatos json e xml
  app.post('/pagamentos/pagamento', function(req, res){

    req.assert("forma_de_pagamento",
        "Forma de pagamento eh obrigatorio").notEmpty();
    req.assert("valor",
      "Valor eh obrigatorio e deve ser um decimal")
        .notEmpty().isFloat();

    var erros = req.validationErrors();

    if (erros){
      console.log('Erros de validacao encontrados');
      res.status(400).send(erros);
      return;
    }
    
    console.log('req.body==>', req.body)
    
    var pagamento = req.body;
    console.log('processando uma requisicao de um novo pagamento');

    /*var cartoesClient = new app.servicos.CartoesClient();
    cartoesClient.autoriza(req.body['cartao'], function (err, request, response, retorno) {
      if (err){
        console.log("Erro ao consultar serviço de cartões.");
        res.status(400).send(err);
        return;
      }
      console.log('Retorno do servico de cartoes: %j', retorno);
    });*/

    pagamento.status = PAGAMENTO_CRIADO;
    pagamento.data = new Date;

    var connection = app.persistencia.connectionFactoryPostGres();
    var pagamentoDao = new app.persistencia.PagamentoDao(connection);

    pagamentoDao.salva(pagamento, function(erro, resultado){
      if(erro){
        console.log('Erro ao inserir no banco:' + erro);
        res.status(500).send(erro);
      } else {
      console.log('pagamento criado');

      // ISERINDO NO CACHE
      var cache = app.servicos.memcachedClient();
      cache.set('pagamento-' + pagamento.id, pagamento, 100000, function (err) {
         console.log('nova chave: pagamento-' + pagamento.id)
       });

      res.location('/pagamentos/pagamento/' +
            resultado.insertId);

      res.status(201).json(pagamento);
    }
    });


  });

  app.put('/pagamentos/pagamento/:id', function(req, res){

    var pagamento = {};
    var id = req.params.id;

    pagamento.id = id;
    pagamento.status = PAGAMENTO_CONFIRMADO;

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDao(connection);

    pagamentoDao.atualiza(pagamento, function(erro){
        if (erro){
          res.status(500).send(erro);
          return;
        }
        console.log('pagamento criado');
        res.send(pagamento);
    });

  });

  app.delete('/pagamentos/pagamento/:id', function(req, res){
    var pagamento = {};
    var id = req.params.id;

    pagamento.id = id;
    pagamento.status = CANCELADO;

    var connection = app.persistencia.connectionFactory();
    var pagamentoDao = new app.persistencia.PagamentoDao(connection);

    pagamentoDao.atualiza(pagamento, function(erro){
        if (erro){
          res.status(500).send(erro);
          return;
        }
        console.log('pagamento cancelado');
        res.status(204).send(pagamento);
    });
  });
}
