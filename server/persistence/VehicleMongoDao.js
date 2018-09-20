//const https = require('https')
function VehicleMongoDao(app) {
    this._app = app;
}

VehicleMongoDao.prototype.updateGeoLocation = function(id, geoLocation, callback) {
    this._app.models.Vehicle.findByIdAndUpdate(
            id, 
            { 
                geoLocation: {
                    time: Date.now(),
                    type: 'Point',
                    coordinates: [geoLocation.latitude, geoLocation.longitude]
                }
            }, 
            function(err, updatedObject){
                if(err){
                    callback(err, null);
                    return;
                }
                callback(null, updatedObject);
            }
    );


    // this._app.models.Vehicle.findOne(
    //         {_id:id}, 
    //         function (err, vehicle){
    //             if(err){
    //                 callback(err, null);
    //                 return;
    //             }
    //             if(!vehicle){
    //                 callback('404 not found', null);
    //                 return;
    //             }
    //             vehicle.geoLocation.coordinates = [geoLocation.lat, geoLocation.lon];
    //             vehicle.save(
    //                 function(err, updatedObject){
    //                     if(err){
    //                         callback(err, null);
    //                         return;
    //                     }
    //                     callback(null, updatedObject);
    //                 }
    //             );
    //         }
    // );
}

VehicleMongoDao.prototype.findAll =  function(callback) {
    if(this._app.persistence.connectionFactoryMongoDb().readyState){
        this._app.models.Vehicle
        .find({})
        .then((vehicles) => {
            callback(null, vehicles);
        });
    }else{
        callback('database connection error', null);
    }
}

VehicleMongoDao.prototype.findAllPaginated =  function(pagination, limit, callback) {
    if(this._app.persistence.connectionFactoryMongoDb().readyState){
        let perPage = Math.max(0, limit);
        let page = Math.max(0, pagination);
        this._app.models.Vehicle
            .find({})
            .limit(perPage)
            .skip(perPage * page)
            .then((vehicles) => {
                callback(null, vehicles);
            });
    }else{
        callback('database connection error', null);
    }
}

VehicleMongoDao.prototype.findById = function (id, callback) {
    if(this._app.persistence.connectionFactoryMongoDb().readyState){
        this._app.models.Vehicle.findById(id).then((vehicle) => {
                callback(null, vehicle);
            });
    }else{
        callback('database connection error', null);
    }
}

VehicleMongoDao.prototype.loadDataForTest = function(callback) {
    let vehicles = [
        new this._app.models.Vehicle({
            name: 'Mercedes-Benz Sprinter Executiva Van',
            identification: 'ASD-3658',
            city: 'Salvador',
            state: 'Bahia',
            country: 'BR',
            model: 'Sprinter',
            brand: 'Mercedes',
            category: 'VAN',
            status: 'ATIVO',
            geoLocation: {
                coordinates: [-23.554251, -46.632033]
            }
        }),
        new this._app.models.Vehicle({
            name: 'Mercedes-Benz Sprinter Executiva Van',
            identification: 'ASD-3658',
            city: 'Salvador',
            state: 'Bahia',
            country: 'BR',
            model: 'Sprinter',
            brand: 'Mercedes',
            category: 'VAN',
            status: 'ATIVO',
            geoLocation: {
                coordinates: [-23.554251, -46.632033]
            }
        })
      ];
      this._app.models.Vehicle.insertMany(vehicles).then(moogoseDocuments => {
          console.log(moogoseDocuments, 'vehicles inserted sucessfuly')
      }).catch(err => {
          console.log(err);
          callback(err, null);
      })
      callback(null, vehicles);
      return;
}

module.exports = function(){
    return VehicleMongoDao
}
