module.exports = (app)=>{

  let version = 2;

  app.get(`/api/v${version}/vehicles/geolocation`, (req, res)=>{
    let service = new app.service.vehicleServiceImpl(app);
    console.log('geolocation-get-api===inicio===>');
    let latitude = -23.554827;
    let longitude = -46.639073;
    service.findByGeoLocation( latitude, longitude,
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

  app.get(`/api/v${version}/vehicles/:id/geolocation`, (req, res)=>{
    let service = new app.service.vehicleServiceImpl(app);
    service.findById(
              req.params.id, 
              function (erro, result){
                if(erro){
                  console.log('api-vehicle-> service error=>', erro);
                  res.status(500).send(erro);
                  return;
                }
                res.status(200).send(result.geoLocation);
                return;
              }
            );
    return;
  });

}
