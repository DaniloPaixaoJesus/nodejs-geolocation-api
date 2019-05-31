
function GeoObjectService(app) {
  this._app = app;
  this._dao = new app.persistence.geoObject(app);
}

GeoObjectService.prototype.create = async function(geoObject) {
    return await this._dao.create(geoObject);
}

GeoObjectService.prototype.updateGeoLocation = async function (id, geoLocation) {
    return await this._dao.updateGeoLocation(id, geoLocation);
}

GeoObjectService.prototype.findAllPaginated = async function (page, limit) {
    return await this._dao.findAllPaginated(page, limit);
}

GeoObjectService.prototype.findAll = async function() {
    return await this._dao.findAll();
}

GeoObjectService.prototype.findById = async function(id) {
    return await this._dao.findById(id);
}

GeoObjectService.prototype.findByGeoLocation = async function(latitude, longitude, distance) {
    return await this._dao.findByGeoLocation(latitude, longitude, distance);
}

GeoObjectService.prototype.loadDataForTest = async function(){
    return await this._dao.loadDataForTest();
}

module.exports = ()=>GeoObjectService