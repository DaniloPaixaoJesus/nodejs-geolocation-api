//const https = require('https')
function VehicleMongoDao(app) {
    this._app = app;
}

VehicleMongoDao.prototype.create = function(vehicle, callback) {
    console.log('VehicleMongoDao.prototype.create->vehicle=>', vehicle);
    this._app.models.Vehicle.create(
        {
            name: vehicle.name,
            identification: vehicle.identification,
            city: vehicle.city,
            state: vehicle.state,
            country: vehicle.country,
            model: vehicle.model,
            brand: vehicle.brand,
            category: vehicle.category,
            status: vehicle.status
        },
        function (err, newVehicle) {
            if (err) return handleError(err);
            callback(null, newVehicle);
            return;
        }
    );
}

VehicleMongoDao.prototype.updateGeoLocation = function(id, geoLocation, callback) {
    this._app.models.Vehicle.findByIdAndUpdate(
            id, 
            { 
                geoLocation: {
                    time: Date.now(),
                    type: 'Point',
                    coordinates: [geoLocation.longitude, geoLocation.latitude]
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

VehicleMongoDao.prototype.findByGeoLocation = function (latitude, longitude, callback) {
    console.log('latitude=>', latitude);
    console.log('longitude=>', longitude);
    Message.find({
        location: {
            $near: {
                $maxDistance: 5000,
                $geometry: {
                    type: "Point",
                    coordinates: [longitude, latitude]
                }
            }
        }
    }).find((error, results) => {
        if (error) console.log(error);
        callback(null, results);
        //console.log(JSON.stringify(results, 0, 2));
        return;
    });    
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
