
function VehicleService(app) {
  this._app = app;
  this._dao = new app.persistence.vehicle(app);
}

VehicleService.prototype.create = async function(vehicle) {
    return await this._dao.create(vehicle);
}

VehicleService.prototype.updateGeoLocation = async function (id, geoLocation) {
    return await this._dao.updateGeoLocation(id, geoLocation);
}

VehicleService.prototype.findAllPaginated = async function (page, limit) {
    return await this._dao.findAllPaginated(page, limit);
}

VehicleService.prototype.findAll = async function() {
    return await this._dao.findAll();
}

VehicleService.prototype.findById = async function(id) {
    return await this._dao.findById(id);
}

VehicleService.prototype.findByGeoLocation = async function(latitude, longitude, distance) {
    return await this._dao.findByGeoLocation(latitude, longitude, distance);
}

VehicleService.prototype.loadDataForTest = async function(){
    return await this._dao.loadDataForTest();
}

module.exports = ()=>VehicleService