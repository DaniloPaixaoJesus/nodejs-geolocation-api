//const https = require('https')
function VehicleMongoDao(app) {
    this._app = app;
    this._ObjectID = require('mongodb').ObjectID;
}

VehicleMongoDao.prototype.create = async function(vehicle, callback) {
    console.log('VehicleMongoDao.prototype.create->vehicle=>', vehicle);
    const newVehicle = {
            name: vehicle.name,
            identification: vehicle.identification,
            city: vehicle.city,
            state: vehicle.state,
            country: vehicle.country,
            model: vehicle.model,
            brand: vehicle.brand,
            category: vehicle.category,
            status: vehicle.status
        };
    const conn = await this._app.persistence.connectionFactoryMongoDriver();

    return await conn.collection('vehicles')
                        .insertOne(newVehicle)
                        .then(result => {
                                    const { insertedId } = result;
                                    // Do something with the insertedId
                                    console.log(`Inserted document with _id: ${insertedId}`);
                                    callback(null, result);
                                });
    
}


VehicleMongoDao.prototype.updateGeoLocation = async function(id, geoLocation, callback) {
    const conn = await this._app.persistence.connectionFactoryMongoDriver();
    console.log('id', id);
    return await conn.collection('vehicles')
                            .updateOne(
                                    {'_id': this._ObjectID(id)}, 
                                    {$set: {
                                                'location':{
                                                    type: 'Point',
                                                    coordinates: [geoLocation.longitude, geoLocation.latitude]
                                                }
                                            } 
                                    }
                            ).then(result => {
                                callback(null, result);
                                return result;
                            });
}


VehicleMongoDao.prototype.findAll =  async function(callback) {
    const conn = await this._app.persistence.connectionFactoryMongoDriver();
    return await conn.collection('vehicles').find().toArray((err, result) => {
        callback(null, result);
      });
}


// VehicleMongoDao.prototype.findAllPaginated =  function(pagination, limit, callback) {
//     if(this._app.persistence.connectionFactoryMongoDb().readyState){
//         let perPage = Math.max(0, limit);
//         let page = Math.max(0, pagination);
//         this._app.models.Vehicle
//             .find({})
//             .limit(perPage)
//             .skip(perPage * page)
//             .then((vehicles) => {
//                 callback(null, vehicles);
//             });
//     }else{
//         callback('database connection error', null);
//     }
// }


VehicleMongoDao.prototype.findById = async function (id, callback) {

    const conn = await this._app.persistence.connectionFactoryMongoDriver();
    // Peform a simple find and return all the documents
    conn.collection('vehicles').findOne( {'_id': this._ObjectID(id)}, (err, vehicle) => {
        callback(null, vehicle);
    });
}


VehicleMongoDao.prototype.findByGeoLocation = async function (latitude, longitude, callback) {
    const conn = await this._app.persistence.connectionFactoryMongoDriver();
    const result = await conn.collection('vehicles').aggregate( 
        [{
            $geoNear: {
                near: {type:"Point",coordinates:[latitude, longitude]},
                distanceField: "distance",
                maxDistance: 500000,
                num: 2,
                spherical: true
            }
        }]
    ).toArray();
    callback(null, result);
}


VehicleMongoDao.prototype.loadDataForTest = async function(callback) {
    let vehicles = [
        {
            name: 'Mercedes-Benz Sprinter Executiva Van',
            identification: 'ASD-3658',
            city: 'Salvador',
            state: 'Bahia',
            country: 'BR',
            model: 'Sprinter',
            brand: 'Mercedes',
            category: 'VAN',
            status: 'ATIVO',
            location: {
                coordinates: [-23.548370, -46.636402],
                type: 'Point'
            }
        },
        {
            name: 'Mercedes-Benz Sprinter Executiva Van',
            identification: 'ASD-3658',
            city: 'Salvador',
            state: 'Bahia',
            country: 'BR',
            model: 'Sprinter',
            brand: 'Mercedes',
            category: 'VAN',
            status: 'ATIVO',
            location: {
                coordinates: [-23.548370, -46.636402],
                type: 'Point'
            }
        },
        {
            name: 'Mercedes-Benz Sprinter Executiva Van',
            identification: 'ASD-3658',
            city: 'Salvador',
            state: 'Bahia',
            country: 'BR',
            model: 'Sprinter',
            brand: 'Mercedes',
            category: 'VAN',
            status: 'ATIVO',
            location: {
                coordinates: [-23.548370, -46.636402],
                type: 'Point'
            }
        }
      ];
    const conn = await this._app.persistence.connectionFactoryMongoDriver();
    const result = await conn.collection('vehicles').insertMany(vehicles);
    callback(null, vehicles);
}

module.exports = function(){
    return VehicleMongoDao
}
