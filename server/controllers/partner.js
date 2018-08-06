module.exports = (app)=>{
  
  //Content negotiation -> ver retornos de formatos json e xml
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
 
  app.get('/api/partners', (req, res)=>{
    var connection = app.persistence.connectionFactoryPostGres()
    var partnerDao = new app.persistence.PartnerDao(connection)
    partnerDao.getAll((erro, partnerResultSet)=>{
      if(erro){
        console.log('api-partners-> database error=>', erro)
        res.status(500).send(erro)
        return next(erros);
      }
      console.log('partner=>', JSON.stringify(partnerResultSet))
      res.status(200).send(partnerResultSet.rows)
      return
    })
  })

  
  app.get(`${API_URL}/:id`, (req, res)=>{
    var id = req.params.id
    console.log('partner=>', id)

    var memcachedClient = app.service.memcachedClient()
    memcachedClient.get('partner-' + id, (erro, retorno)=>{
      if (erro || !retorno){
        console.log('MISS - key not found', id)
        var connection = app.persistence.connectionFactoryPostGres()
        var partnerDao = new app.persistence.PartnerDao(connection)
        partnerDao.findById(id, function(erro, resultado){
          if(erro){
            console.log('api-partners-> database error=>', erro)
            res.status(500).send(erro)
            return
          }
          console.log('partner=>', JSON.stringify(resultado))
          res.json(resultado.rows)
          return
        })
        //HIT no cache
      } else {
        console.log('HIT - partner=>', JSON.stringify(retorno))
        res.json(retorno)
        return
      }
    })

  })

  app.post(`${API_URL}`, (req, res)=>{
    // validacao do servico
    req.assert("name",
        "partner name cannot be empty").notEmpty()
    req.assert("description",
        "partner description cannot be empty").notEmpty()
    /*
    req.assert("value",
      "Valor eh obrigatorio e deve ser um decimal")
        .notEmpty().isFloat()
    var erros = req.validationErrors()

    if (erros){
      console.log('Erros de validacao encontrados')
      res.status(400).send(erros)
      return
    }*/
    
    console.log('partner->req.body==>', req.body)
    
    var partner = req.body

    /*var cartoesClient = new app.service.CartoesClient()
    cartoesClient.autoriza(req.body['cartao'], function (err, request, response, retorno) {
      if (err){
        console.log("Erro ao consultar serviço de cartões.")
        res.status(400).send(err)
        return
      }
      console.log('Retorno do servico de cartoes: %j', retorno)
    })*/

    var connection = app.persistence.connectionFactoryPostGres()
    var partnerDao = new app.persistence.PartnerDao(connection)

    partnerDao.save(partner, (erro, resultPartner)=>{
      if(erro){
        console.log('api-partners-> database error=>', erro)
        res.status(500).send(erro)
      } else {
        console.log('partner created', resultPartner.insertId)
        // ISERINDO NO CACHE
        var cache = app.service.memcachedClient()
        cache.set('partner-' + resultPartner.insertId, resultPartner, 100000, 
            (err)=> {
                console.log('new key: partner=>', resultPartner.insertId)
            })
        res.location(`${API_URL}/${resultPartner.insertId}`)
        res.status(201).json(resultPartner.rows)
      }
    })


  })

  app.put(`${API_URL}/:id`, (req, res)=>{
    console.log('partner->req.body==>', req.body)
    console.log('partner->id==>', req.params.id)
    var partner = req.body
    partner.id = req.params.id
    var connection = app.persistence.connectionFactoryPostGres()
    var partnerDao = new app.persistence.PartnerDao(connection)

    partnerDao.update(partner, (erro)=>{
        if (erro){
          console.log('api-partners-> database error=>', erro)
          res.status(500).send(erro)
          return
        }
        console.log('partner updated=>', partner)
        res.send(partner)
    })

  })

}
