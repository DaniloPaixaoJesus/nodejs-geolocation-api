module.exports = (app)=>{

  let version = 1;
  
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
  
  app.get('/api/v1/vehicles/:id', (req, res)=>{
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

  app.get('/api/v1/vehicles/loaddata/init', (req, res)=>{
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
