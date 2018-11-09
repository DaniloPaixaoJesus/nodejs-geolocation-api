module.exports = (app)=>{

  const version = 1;

  app.post(`/api/v${version}/vehicles`, async function(req, res){
    /**   PAYLOAD Exemplo
          {"vehicle":{"name": "Kombi VW","identification": "PJD 9865","city": "São Paulo","state": "São Paulo","country": "BR","model": "Kombi","brand": "Volkswagen","category": "VAN","status": "ATIVO"}}
     */
    const service = new app.service.vehicleServiceImpl(app);
    const vehicle = req.body["vehicle"];
    service
          .create(vehicle)
          .then(result =>{
            const { insertedId } = result;
            const retorno = {
              insertedId: insertedId,
              result: result
            }
            if(!result){
              res.status(404).send();
            }else{
              res.status(200).send(retorno);
            }
          })
          .catch(err => {
            res.status(500).send(err);
            return;
          }
        );
  });

  app.put(`/api/v${version}/vehicles/:id/geolocation`, async function(req, res){
    /**   PAYLOAD Exemplo
          {"geoLocation":{"latitude":0, "longitude":0}}
    */
    const service = new app.service.vehicleServiceImpl(app);
    const id = req.params.id;
    const geoLocation = {
                longitude: req.body["geoLocation"].longitude, 
                latitude: req.body["geoLocation"].latitude
          };
    await service
          .updateGeoLocation(id, geoLocation)
          .then(result =>{
            if(!result){
              res.status(404).send();
            }else{
              res.status(200).send(result);
            }
          })
          .catch(err => {
            res.status(500).send();
            return;
          }
        );
  });

  app.get(`/api/v${version}/vehicles/page/:page/limit/:limit`, async function(req, res){
    const service = new app.service.vehicleServiceImpl(app);
    const page = req.params.page;
    const limit = req.params.limit;
    if(!page){
      page = 0;
    }
    await service
              .findAllPaginated( page, limit)
              .then(result =>{
                if(!result || Number(result.length) === 0){
                  res.status(404).send();
                }else{
                  res.status(200).send(result);
                }
              })
              .catch(err => {
                res.status(500).send();
                return;
              }
            );
  });

  app.get(`/api/v${version}/vehicles/:id`, async (req, res)=>{
    const service = new app.service.vehicleServiceImpl(app);
    await service
              .findById(req.params.id)
              .then(result =>{
                if(!result){
                  res.status(404).send();
                }else{
                  res.status(200).send(result);
                }
              })
              .catch(err => {
                res.status(500).send();
              }
            );
  });

  app.get(`/api/v${version}/vehicles`,  async function(req, res){
    const service = new app.service.vehicleServiceImpl(app);
    service.findAll()
            .then(result =>{
              if(!result || Number(result.length) === 0){
                res.status(404).send();
              }else{
                res.status(200).send(result);
              }
            })
            .catch(err => {
              res.status(500).send();
            }
          );
  });

  app.get(`/api/v${version}/vehicles/:lat/:lon/:distance`, async function (req, res){
    //http://localhost:3000/api/v2/vehicles/-23.554827/-46.639073/5000
    const service = new app.service.vehicleServiceImpl(app);
    const latitude = Number(req.params.lat);
    const longitude = Number(req.params.lon);
    const distance = Number(req.params.distance)
    ;
    
    service
          .findByGeoLocation( latitude, longitude, distance)
          .then(result =>{
            if(!result || Number(result.length) === 0){
              res.status(404).send();
            }else{
              res.status(200).send(result);
            }
          })
          .catch(err => {
            res.status(500).send();
          }
        );
  });

  app.get(`/api/v${version}/vehicles/:id/geolocation`, (req, res)=>{
    const service = new app.service.vehicleServiceImpl(app);
    service.findById(
              req.params.id, 
              function (err, result){
                if(err){
                  console.log('api-vehicle-> service err=>', err);
                  res.status(500).send(err);
                }
                res.status(200).send(result);
              }
          );
  });

  app.get(`/api/v${version}/vehicles/loaddata/init`, async (req, res)=>{
    const service = new app.service.vehicleServiceImpl(app);
    await service
              .loadDataForTest()
              .then(result =>{
                if(!result){
                  res.status(404).send();
                }else{
                  res.status(200).send(result);
                }
              })
              .catch(err => {
                res.status(500).send();
              }
            );
  });

}
