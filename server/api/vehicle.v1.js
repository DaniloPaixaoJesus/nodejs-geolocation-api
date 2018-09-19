module.exports = (app)=>{

  let version = 1;

  app.get(`/api/v${version}/vehicles/:id/geolocation`, (req, res)=>{
    let reponse = { 
      todo:'api return geolocation data'
    }
    res.status(200).send(reponse);
  });

  app.put(`/api/v${version}/vehicles/:id/geolocation`, (req, res)=>{
    let service = new app.service.vehicleServiceImpl(app);
    let id = req.params.id;
    const geoLocation = req.body.geoLocation;
    console.log('req.params.id=>', req.params.id);
    console.log('req.body.geoLocation=>', req.body.geoLocation);
    service.updateGeoLocation( 
              id,
              geoLocation,
              function (erro, result){
                if(erro){
                  console.log('api-vehicle-> service error=>', erro)
                  res.status(500).send(erro)
                  return;
                }
                res.status(200).send(result);
                return;
              }
            );
    return;
  });

  app.get(`/api/v${version}/vehicles/page/:page/limit/:limit`, (req, res)=>{
    let service = new app.service.vehicleServiceImpl(app);
    let page = req.params.page;
    let limit = req.params.limit;
    console.log('page=>', page);
    console.log('limit=>', limit);
    if(!page){
      page = 0;
    }
    service.findAllPaginated( page, limit,
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
  
  app.get(`/api/v${version}/vehicles`, (req, res)=>{
    let service = new app.service.vehicleServiceImpl(app);
    service.findAll( 
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
