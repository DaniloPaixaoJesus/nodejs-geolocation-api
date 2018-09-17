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

VehicleMongoDao.prototype.findById = function (id) {
    let posts = [{nome:'VehicleMongoDao.prototype.findById('+id+')'},{nome: 'VehicleMongoDao.prototype.findById'}];
    return posts;
}

VehicleMongoDao.prototype.update = function(partner,callback) {
}

module.exports = function(){
    return VehicleMongoDao
}
