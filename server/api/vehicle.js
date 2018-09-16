module.exports = (app)=>{

  app.get('/api/vehicles', (req, res)=>{
    return app.service.vehicleService(req, res);
  });

}
