//const https = require('https')
function VehicleMongoDao(app) {
    this._app = app;
}
VehicleMongoDao.prototype.save = function(partner,callback) {

}

VehicleMongoDao.prototype.findAll = function() {
    let posts = [{nome:'VehicleMongoDao.prototype.findAll'},{nome: 'VehicleMongoDao.prototype.findAll'}];
    return posts;
}

VehicleMongoDao.prototype.findById = function (id, callback) {
    let posts = [{nome:'VehicleMongoDao.prototype.findById('+id+')'},{nome: 'VehicleMongoDao.prototype.findById'}];
    callback(null, posts);
    return;
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
                latitude: '-23.554251',
                longitude: '-46.632033'
            }
        }),
        new this._app.models.Vehicle({
            name: 'Mercedes-Benz Sprinter Executiva Van',
            identification: 'JPP-9658',
            city: 'Salvador',
            state: 'Bahia',
            country: 'BR',
            model: 'Sprinter',
            brand: 'Mercedes',
            category: 'VAN',
            status: 'ATIVO',
            geoLocation: { 
                latitude: '-23.554231',
                longitude: '-46.633138'
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

VehicleMongoDao.prototype.findDataForTest = function(callback) {
    if(app.persistence.connectionFactoryMongoDb().readyState){
        app.models.Vehicle.find({}).then((vehicles) => {
                callback(null, vehicles);
            });
    }else{
        callback('database connection error', null);
    }
}

module.exports = function(){
    return VehicleMongoDao
}
