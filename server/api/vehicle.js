module.exports = (app)=>{

  app.get('/api/vehicles', (req, res)=>{
    return app.service.vehicleService(req, res);
  });

  app.get('/api2/vehicles', (req, res)=>{
    var dao = new app.persistence.VehicleMongoDao();
    //let posts = dao.getAll();
    let service = new app.service.vehicleServiceImpl(app);//dao
    let posts = service.findAll();
    res.status(200).send(posts);
    return 
  });
  
  // app.get('/api2/vehicles/:id', (req, res)=>{
  //   let service = new app.service.vehicleServiceImpl();
  //   let posts = service.findById(req.params.id);
  //   res.status(200).send(posts);
  //   return 
  // });

}
