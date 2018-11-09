
function VehicleServiceImpl(app) {
  this._app = app;
  this._dao = new app.persistence.VehicleMongoDao(app);
}

VehicleServiceImpl.prototype.create = async function(vehicle) {
    return await this._dao.create(vehicle);
}

VehicleServiceImpl.prototype.updateGeoLocation = async function (id, geoLocation) {
    return await this._dao.updateGeoLocation(id, geoLocation);
}

VehicleServiceImpl.prototype.findAllPaginated = async function (page, limit) {
    return await this._dao.findAllPaginated(page, limit);
}

VehicleServiceImpl.prototype.findAll = async function() {
    return await this._dao.findAll();
}

VehicleServiceImpl.prototype.findById = async function(id) {
    return await this._dao.findById(id);
}

VehicleServiceImpl.prototype.findByGeoLocation = async function(latitude, longitude, distance) {
    return await this._dao.findByGeoLocation(latitude, longitude, distance);
}

VehicleServiceImpl.prototype.loadDataForTest = async function(){
    return await this._dao.loadDataForTest();
}

module.exports = ()=>VehicleServiceImpl