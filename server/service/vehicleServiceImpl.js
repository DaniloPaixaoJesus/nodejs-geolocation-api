
function VehicleServiceImpl() {
  this._client = 'some initialized value, could be DAO';
}
VehicleServiceImpl.prototype.findAll = 
                ()=>{
                    let posts = [{nome:'danilo 22222 ALL=>'},{nome: 'nnn nnnnn nnnn  nn'}];
                    return posts;
                }

VehicleServiceImpl.prototype.findById = 
(id)=>{
    let posts = [{nome:'danilo 22222 ==>id==>'+id},{nome: 'nnn nnnnn nnnn  nn'}];
    return posts;
}

module.exports = ()=>VehicleServiceImpl