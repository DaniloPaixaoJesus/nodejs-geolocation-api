
function VehicleServiceImpl(app) {
  this._app = app;
  this._dao = new app.persistence.VehicleMongoDao();
}
VehicleServiceImpl.prototype.findAll = 
                function (){
                    let posts = this._dao.getAll();
                    return posts;
                }

VehicleServiceImpl.prototype.findById = 
(id)=>{
    let posts = [{nome:'danilo 22222 ==>id==>'+id},{nome: 'nnn nnnnn nnnn  nn'}];
    return posts;
}

module.exports = ()=>VehicleServiceImpl