
function VehicleServiceImpl(app) {
  this._app = app;
  this._dao = new app.persistence.VehicleMongoDao();
}
VehicleServiceImpl.prototype.findAll = 
            function (){
                let posts = this._dao.findAll();
                return posts;
            }

VehicleServiceImpl.prototype.findById = 
            function (id) {
                let posts = this._dao.findById(id);
                return posts;
            }

module.exports = ()=>VehicleServiceImpl