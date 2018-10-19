module.exports = (app)=>{

  let version = 2;

  app.post(`/api/v${version}/vehicles`, (req, res)=>{
    /**   PAYLOAD Exemplo
          {"vehicle":{"name": "Kombi VW","identification": "PJD 9865","city": "São Paulo","state": "São Paulo","country": "BR","model": "Kombi","brand": "Volkswagen","category": "VAN","status": "ATIVO"}}
     */
    let service = new app.service.vehicleServiceImpl(app);
    let vehicle = req.body["vehicle"];
    console.log('req.body=>', req.body);
    console.log('vehicle=>', vehicle);
    service.create(
              vehicle,
              function (erro, result){
                if(erro){
                  console.log('api-vehicle-> service error=>', erro)
                  res.status(500).send(erro)
                }
                res.status(200).send(result);
              }
            );
  });

  app.put(`/api/v${version}/vehicles/:id/geolocation`, (req, res)=>{
    /**   PAYLOAD Exemplo
          {"geoLocation":{"latitude":0, "longitude":0}}
    */
    let service = new app.service.vehicleServiceImpl(app);
    let id = req.params.id;
    const geoLocation = {
                longitude: req.body["geoLocation"].longitude, 
                latitude: req.body["geoLocation"].latitude
          };
    service.updateGeoLocation( 
              id,
              geoLocation,
              function (err, result){
                if(err){
                  console.log('api-vehicle-> service err=>', err)
                  res.status(500).send(err)
                }
                res.status(200).send(result);
              }
        );
  });

  app.get(`/api/v${version}/vehicles`, (req, res)=>{
    let service = new app.service.vehicleServiceImpl(app);
    service.findAll( 
              function (err, result){
                if(err){
                  console.log('api-vehicle-> service err=>', err)
                  res.status(500).send(err)
                }
                res.status(200).send(result);
              }
            );
  });

  app.get(`/api/v${version}/vehicles/geolocation`, (req, res)=>{
    let service = new app.service.vehicleServiceImpl(app);
    let latitude = -23.554827;
    let longitude = -46.639073;
    service.findByGeoLocation( latitude, longitude,
              function (err, result){
                if(err){
                  console.log('api-vehicle-> service err=>', err)
                  res.status(500).send(err)
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
              function (err, result){
                if(err){
                  console.log('api-vehicle-> service err=>', err);
                  res.status(500).send(err);
                }
                res.status(200).send(result.geoLocation);
              }
          );
  });

  app.get(`/api/v${version}/vehicles/loaddata/init`, (req, res)=>{
    let service = new app.service.vehicleServiceImpl(app);
    service.loadDataForTest(
              function (err, result){
                if(err){
                  console.log('api-vehicle-> service error=>', err)
                  res.status(500).send(err)
                  return
                }
                res.status(200).send(result);
              }
            );
  });

}
