module.exports = (app)=>{

  const version = 1;
  const resource = 'geoobjects';

  app.post(`/api/v${version}/${resource}`, async function(req, res){
    /**   PAYLOAD Exemplo
          {"geoObject":{"name": "any name","identification": "1978xr2hf2sdoc","status": "ATIVO"}
     */
    const geoObject = req.body["geoObject"];
    await new app.service.geoObject(app)
          .create(geoObject)
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

  app.put(`/api/v${version}/${resource}/:id/geolocation`, async function(req, res){
    /**   PAYLOAD Exemplo
          {"geoLocation":{"latitude":0, "longitude":0}}
    */
    const id = req.params.id;
    const geoLocation = {
                longitude: req.body["geoLocation"].longitude, 
                latitude: req.body["geoLocation"].latitude
          };
    await new app.service.geoObject(app)
          .updateGeoLocation(id, geoLocation)
          .then(result =>{
            if(!result){
              res.status(404).send();
            }else{
              res.status(200).send(result);
            }
          })
          .catch(err => {
            res.status(500).send(err);
            return;
          }
        );
  });

  app.get(`/api/v${version}/${resource}/page/:page/limit/:limit`, async function(req, res){
    const page = req.params.page;
    const limit = req.params.limit;
    if(!page){
      page = 0;
    }
    await new app.service.geoObject(app)
              .findAllPaginated( page, limit)
              .then(result =>{
                if(!result || Number(result.length) === 0){
                  res.status(404).send();
                }else{
                  res.status(200).send(result);
                }
              })
              .catch(err => {
                res.status(500).send(err);
                return;
              }
            );
  });

  app.get(`/api/v${version}/${resource}/:id`, async (req, res)=>{
    await new app.service.geoObject(app)
              .findById(req.params.id)
              .then(result =>{
                if(!result){
                  res.status(404).send();
                }else{
                  res.status(200).send(result);
                }
              })
              .catch(err => {
                res.status(500).send(err);
              }
            );
  });

  app.get(`/api/v${version}/${resource}`,  async function(req, res){
    await new app.service.geoObject(app).findAll()
            .then(result =>{
              if(!result || Number(result.length) === 0){
                res.status(404).send();
              }else{
                res.status(200).send(result);
              }
            })
            .catch(err => {
              res.status(500).send(err);
            }
          );
  });

  app.get(`/api/v${version}/${resource}/:lat/:lon/:distance`, async function (req, res){
    //http://localhost:3000/api/v2/geoobjects/-23.554827/-46.639073/5000
    const service = new app.service.geoObject(app);
    const latitude = Number(req.params.lat);
    const longitude = Number(req.params.lon);
    const distance = Number(req.params.distance)
    ;
    await new app.service.geoObject(app)
          .findByGeoLocation( latitude, longitude, distance)
          .then(result =>{
            if(!result || Number(result.length) === 0){
              res.status(404).send();
            }else{
              res.status(200).send(result);
            }
          })
          .catch(err => {
            res.status(500).send(err);
          }
        );
  });

  app.get(`/api/v${version}/${resource}/:id/geolocation`, async function(req, res){
    await new app.service.geoObject(app).findById(req.params.id)
            .then(result =>{
              if(!result || Number(result.length) === 0){
                res.status(404).send();
              }else{
                res.status(200).send(result.location);
              }
            })
            .catch(err => {
              res.status(500).send(err);
            }
          );
  });

  app.get(`/api/v${version}/${resource}/loaddata/init`, async (req, res)=>{
    new app.service.geoObject(app)
              .loadDataForTest()
              .then(result =>{
                if(!result){
                  res.status(404).send();
                }else{
                  res.status(200).send(result);
                }
              })
              .catch(err => {
                res.status(500).send(err);
              }
            );
  });

}
