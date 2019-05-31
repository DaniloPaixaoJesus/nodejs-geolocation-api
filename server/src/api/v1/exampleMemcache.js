module.exports = (app)=>{
 
  const API_URL = '/api/example';
  
  // app.get(`${API_URL}/:id`, (req, res)=>{
  //   var id = req.params.id;
  //   var memcachedClient = app.service.memcachedClient()
  //   memcachedClient.get('partner-' + id, (erro, retorno)=>{
  //     if (erro || !retorno){
  //       console.log('MISS - key not found', id)
  //       var connection = app.persistence.connectionFactoryPostGres()
  //       var partnerDao = new app.persistence.PartnerDao(connection)
  //       partnerDao.findById(id, function(erro, resultado){
  //         if(erro){
  //           console.log('api-partners-> database error=>', erro)
  //           res.status(500).send(erro)
  //           return
  //         }
  //         console.log('partner=>', JSON.stringify(resultado))
  //         res.json(resultado.rows)
  //         return
  //       })
  //       //HIT no cache
  //     } else {
  //       console.log('HIT - partner=>', JSON.stringify(retorno))
  //       res.json(retorno)
  //       return
  //     }
  //   })

  // })

  // app.post(`${API_URL}`, (req, res)=>{
  //   // validacao do servico
  //   req.assert('name',
  //       'name cannot be empty').notEmpty();
  //   req.assert('description',
  //       'description cannot be empty').notEmpty();
  //   req.assert('value',
  //     'Value cannot be empty. Value should be decimal')
  //       .notEmpty().isFloat();
  //   var erros = req.validationErrors();

  //   if (erros){
  //     console.log('Erros de validacao encontrados')
  //     res.status(400).send(erros)
  //     return
  //   }
    
  //   var partner = req.body

  //   var httpCallExample = new app.service.HttpCallExample()
  //   httpCallExample.algumMetodoQualquer(req.body['payload'], function (err, request, response, retorno) {
  //     if (err){
  //       console.log("Erro ao executar API.")
  //       res.status(400).send(err)
  //       return
  //     }
  //     console.log('Retorno do servico OK: %j', retorno)
  //   })

  //   var connection = app.persistence.connectionFactoryPostGres()
  //   var partnerDao = new app.persistence.PartnerDao(connection)

  //   partnerDao.save(partner, (erro, resultPartner)=>{
  //     if(erro){
  //       res.status(500).send(erro)
  //     } else {
  //       // insert cache
  //       var cache = app.service.memcachedClient()
  //       cache.set('partner-' + resultPartner.insertId, resultPartner, 100000, 
  //           (err)=> {
  //               console.log('new key: partner=>', resultPartner.insertId)
  //           })
  //       res.location(`${API_URL}/${resultPartner.insertId}`)
  //       res.status(201).json(resultPartner.rows)
  //     }
  //   })
  // })

}
