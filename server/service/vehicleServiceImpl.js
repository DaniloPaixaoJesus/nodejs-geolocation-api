
function VehicleServiceImpl(app) {
  this._app = app;
  this._dao = new app.persistence.VehicleMongoDao(app);
}

VehicleServiceImpl.prototype.create = function (vehicle, callback) {
    console.log('VehicleServiceImpl.prototype.create->vehicle=>', vehicle);
    return this._dao.create(vehicle, function (err, result){
        if(err){
            console.log('api-vehicle-> dao err=>', err);
            res.status(500).send(err);
        }
        callback(null, result);
    });
}

VehicleServiceImpl.prototype.updateGeoLocation = function (id, geoLocation, callback) {
    return this._dao.updateGeoLocation(id, geoLocation, function (erro, result){
        if(erro){
            console.log('api-vehicle-> dao error=>', erro);
            res.status(500).send(erro);
        }
        callback(null, result);
    });
}

VehicleServiceImpl.prototype.findAllPaginated = function (page, limit, callback) {
    return this._dao.findAllPaginated(page, limit, function (erro, result){
        if(erro){
            console.log('api-vehicle-> dao error=>', erro);
            res.status(500).send(erro);
        }
        callback(null, result);
    });
}

VehicleServiceImpl.prototype.findAll = function (callback) {
    return this._dao.findAll(function (erro, result){
        if(erro){
            console.log('api-vehicle-> dao error=>', erro);
            res.status(500).send(erro);
        }
        callback(null, result);
    });
}

VehicleServiceImpl.prototype.findById = function (id, callback) {
    return this._dao.findById(id, function (erro, result){
        if(erro){
            console.log('api-vehicle-> dao error=>', erro);
            res.status(500).send(erro);
        }
        callback(null, result);
    });
}

VehicleServiceImpl.prototype.findByGeoLocation = function (latitude, longitude, callback) {
    return this._dao.findByGeoLocation(latitude, longitude, function (err, result){
        if(err){
            console.log('api-vehicle-> dao error=>', err);
            res.status(500).send(err);
        }
        callback(null, result);
    });
}

VehicleServiceImpl.prototype.loadDataForTest = function (callback) {
    return this._dao.loadDataForTest(function (err, result){
        if(err){
            console.log('api-vehicle-> dao error=>', err);
            res.status(500).send(err);
        }
        callback(null, result);
    });
}

module.exports = ()=>VehicleServiceImpl