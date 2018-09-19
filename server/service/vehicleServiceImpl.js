
function VehicleServiceImpl(app) {
  this._app = app;
  this._dao = new app.persistence.VehicleMongoDao(app);
}
VehicleServiceImpl.prototype.findAll = function (page, callback) {
    return this._dao.findAll(page, function (erro, result){
        if(erro){
            console.log('api-vehicle-> dao error=>', erro)
            res.status(500).send(erro)
            return
        }
        callback(null, result)
        return;
    });
}

VehicleServiceImpl.prototype.findById = function (id, callback) {
    return this._dao.findById(id, function (erro, result){
        if(erro){
            console.log('api-vehicle-> dao error=>', erro)
            res.status(500).send(erro)
            return
        }
        callback(null, result)
        return;
    });
}

VehicleServiceImpl.prototype.loadDataForTest = function (callback) {
                return this._dao.loadDataForTest(function (erro, result){
                    if(erro){
                        console.log('api-vehicle-> dao error=>', erro)
                        res.status(500).send(erro)
                        return
                    }
                    callback(null, result)
                    return;
                });
            }

module.exports = ()=>VehicleServiceImpl