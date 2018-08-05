module.exports = (app)=>{
  app.get('/api/partners', (req, res)=>{
    var connection = app.persistence.connectionFactoryPostGres()
    var partnerDao = new app.persistence.PartnerDao(connection)
    partnerDao.getAll((erro, resultado)=>{
      if(erro){
        console.log('erro ao consultar no banco: ' + erro)
        res.status(500).send(erro)
        return
      }
      console.log('pagamento encontrado: ' + JSON.stringify(resultado))
      res.status(200).send(resultado.rows)
      return
    })
  })

  /**
  res.status(400)
  res.format({
    html: function(){
        res.render("produtos/form",{validationErrors:errors,produto:produto})
    },
    json: function(){
        res.send(errors)
    }
  })
   */

  const API_URL = '/api/partners'
  const PAGAMENTO_CRIADO = 'CRIADO'
  const PAGAMENTO_CONFIRMADO = 'CONFIRMADO'
  const PAGAMENTO_CANCELADO = 'CANCELADO'

  app.get(`${API_URL}/:id`, (req, res)=>{
    var id = req.params.id
    console.log('consultando pagamento: ' + id)

    /**
    busca primeiro no cache
     */
    var memcachedClient = app.service.memcachedClient()
    memcachedClient.get('pagamento-' + id, (erro, retorno)=>{
      if (erro || !retorno){
        console.log('MISS - chave nao encontrada')

        /**
        pesquisa na base dados
         */
        var connection = app.persistence.connectionFactoryPostGres()
        var partnerDao = new app.persistence.PartnerDao(connection)
        partnerDao.findById(id, function(erro, resultado){
          if(erro){
            console.log('erro ao consultar no banco: ' + erro)
            res.status(500).send(erro)
            return
          }
          console.log('pagamento encontrado: ' + JSON.stringify(resultado))
          res.json(resultado.rows)
          return
        })
        //HIT no cache
      } else {
        console.log('HIT - valor: ' + JSON.stringify(retorno))
        res.json(retorno)
        return
      }
    })

  })

  //Content negotiation -> ver retornos de formatos json e xml
  app.post(`${API_URL}`, (req, res)=>{
    /**
     * validacao do servico
     */
    /*req.assert("name",
        "Forma de pagamento eh obrigatorio").notEmpty()
    req.assert("description",
      "Valor eh obrigatorio e deve ser um decimal")
        .notEmpty().isFloat()
    var erros = req.validationErrors()

    if (erros){
      console.log('Erros de validacao encontrados')
      res.status(400).send(erros)
      return
    }*/
    
    console.log('pagamento->req.body==>', req.body)
    
    var pagamento = req.body
    console.log('processando uma requisicao de um novo pagamento')

    /*var cartoesClient = new app.service.CartoesClient()
    cartoesClient.autoriza(req.body['cartao'], function (err, request, response, retorno) {
      if (err){
        console.log("Erro ao consultar serviço de cartões.")
        res.status(400).send(err)
        return
      }
      console.log('Retorno do servico de cartoes: %j', retorno)
    })*/

    pagamento.status = PAGAMENTO_CRIADO
    pagamento.data = new Date

    var connection = app.persistence.connectionFactoryPostGres()
    var partnerDao = new app.persistence.PartnerDao(connection)

    partnerDao.save(pagamento, (erro, resultado)=>{
      if(erro){
        console.log('Erro ao inserir no banco:' + erro)
        res.status(500).send(erro)
      } else {
        console.log('pagamento criado')
        // ISERINDO NO CACHE
        var cache = app.service.memcachedClient()
        cache.set('pagamento-' + pagamento.id, pagamento, 100000, (err)=> {
           console.log('nova chave: pagamento-' + pagamento.id)
        })
        res.location('/pagamentos/pagamento/' +
            resultado.insertId)
        res.status(201).json(pagamento)
      }
    })


  })

  app.put(`${API_URL}/:id`, (req, res)=>{

    var pagamento = {}
    var id = req.params.id

    pagamento.id = id
    pagamento.status = PAGAMENTO_CONFIRMADO

    var connection = app.persistence.connectionFactory()
    var partnerDao = new app.persistence.PartnerDao(connection)

    partnerDao.update(pagamento, (erro)=>{
        if (erro){
          res.status(500).send(erro)
          return
        }
        console.log('pagamento criado')
        res.send(pagamento)
    })

  })

  app.delete(`${API_URL}/:id`, (req, res)=>{
    var pagamento = {}
    var id = req.params.id

    pagamento.id = id
    pagamento.status = CANCELADO

    var connection = app.persistence.connectionFactory()
    var partnerDao = new app.persistence.PartnerDao(connection)

    partnerDao.update(pagamento, (erro)=>{
        if (erro){
          res.status(500).send(erro)
          return
        }
        console.log('pagamento cancelado')
        res.status(204).send(pagamento)
    })
  })
}
