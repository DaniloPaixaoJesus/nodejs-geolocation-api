module.exports = (app)=>{

  let version = 1;

  app.get(`/api/v${version}/vehicles/:id/geolocation`, (req, res)=>{
    let reponse = { 
      todo:'api return geolocation data'
    }
    res.status(200).send(reponse);
  });

  app.put(`/api/v${version}/vehicles/:id/geolocation`, (req, res)=>{
    let reponse = { 
      todo:'api insert new geolocation data'
    }
    res.status(200).send(reponse);
  });
  
  app.get(`/api/v${version}/vehicles`, (req, res)=>{
    let service = new app.service.vehicleServiceImpl(app);
    let page = req.query.page;
    console.log('PAGE=====>', page);
    if(!page){
      page = 0;
    }
    service.findAll( page,
              function (erro, result){
                if(erro){
                  console.log('api-vehicle-> service error=>', erro)
                  res.status(500).send(erro)
                  return
                }
                res.status(200).send(result);
                return;
              }
            );
    return;
  });
  
  app.get(`/api/v${version}/vehicles/:id`, (req, res)=>{
    let service = new app.service.vehicleServiceImpl(app);
    service.findById(
              req.params.id, 
              function (erro, result){
                if(erro){
                  console.log('api-vehicle-> service error=>', erro)
                  res.status(500).send(erro)
                  return
                }
                res.status(200).send(result);
                return;
              }
            );
    return;
  });

  app.get(`/api/v${version}/vehicles/loaddata/init`, (req, res)=>{
    let service = new app.service.vehicleServiceImpl(app);
    service.loadDataForTest(
              function (erro, result){
                if(erro){
                  console.log('api-vehicle-> service error=>', erro)
                  res.status(500).send(erro)
                  return
                }
                res.status(200).send(result);
                return;
              }
            );
    return;
  });

}
