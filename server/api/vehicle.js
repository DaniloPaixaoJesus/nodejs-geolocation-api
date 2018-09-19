module.exports = (app)=>{

  app.get('/api2/vehicles', (req, res)=>{
    return app.service.vehicleService(req, res);
  });

  app.get('/api/vehicles', (req, res)=>{
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
  
  app.get('/api/vehicles/:id', (req, res)=>{
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

  app.get('/api/vehicles/loaddata/init', (req, res)=>{
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

  // app.get('/api/vehicles/loaddata/data', (req, res)=>{
  //   let service = new app.service.vehicleServiceImpl(app);
  //   service.findDataForTest(
  //             function (erro, result){
  //               if(erro){
  //                 console.log('api-vehicle-> service error=>', erro)
  //                 res.status(500).send(erro)
  //                 return
  //               }
  //               res.status(200).send(result);
  //               return;
  //             }
  //           );
  //   return;
  // });

}
