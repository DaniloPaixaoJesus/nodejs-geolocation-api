//const https = require('https')
function VehicleMongoDao(app) {
    this._app = app;
    this._ObjectID = require('mongodb').ObjectID;
}

VehicleMongoDao.prototype.create = async function (vehicle) {
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
    const conn = await this._app.database.connectionFactoryMongoDriver();
    return await conn.collection('vehicles')
        .insertOne(newVehicle);

}


VehicleMongoDao.prototype.updateGeoLocation = async function (id, geoLocation) {
    const conn = await this._app.database.connectionFactoryMongoDriver();
    return await conn.collection('vehicles')
        .updateOne(
            { '_id': this._ObjectID(id) },
            {
                $set: {
                    'location': {
                        type: 'Point',
                        coordinates: [geoLocation.longitude, geoLocation.latitude]
                    }
                }
            }
        );
}


VehicleMongoDao.prototype.findAll = async function () {
    const conn = await this._app.database.connectionFactoryMongoDriver();
    return await conn.collection('vehicles').find().toArray();
}

VehicleMongoDao.prototype.findAllPaginated = async function (pagination, limit) {
    const conn = await this._app.database.connectionFactoryMongoDriver();
    const result = await conn.collectin('vehicles').find().toArray();
    return new Promise((resolve, reject) => {
        if(!result){
            reject(result);
        }else{
            resolve(result);
        }
    });
}


VehicleMongoDao.prototype.findById = async function (id) {
    const conn = await this._app.database.connectionFactoryMongoDriver();
    const result = await conn.collection('vehicles').findOne({ '_id': this._ObjectID(id) });
    return new Promise((resolve, reject) => {
        resolve(result);
    });
}

VehicleMongoDao.prototype.findByIdCallBack = async function (id, callback) {
    const conn = await this._app.database.connectionFactoryMongoDriver();
    conn.collection('vehicles').findOne({ '_id': this._ObjectID(id) }, (err, vehicle) => {
        callback(null, vehicle);
    });
}


VehicleMongoDao.prototype.findByGeoLocation = async function(latitude, longitude, distance) {
    const conn = await this._app.database.connectionFactoryMongoDriver();
    return await conn.collection('vehicles').aggregate(
        [{
            $geoNear: {
                near: { type: "Point", coordinates: [latitude, longitude] },
                distanceField: "distance",
                maxDistance: distance,
                num: 2,
                spherical: true
            }
        }]
    ).toArray();
}


VehicleMongoDao.prototype.loadDataForTest = async function () {
    const vehicles = [
        {
            name: 'Mercedes-Benz Sprinter Executiva Van',
            identification: 'ASD-3658',
            city: 'São Paulo',
            state: 'São Paulo',
            country: 'BR',
            model: 'Sprinter',
            brand: 'Mercedes',
            category: 'VAN',
            status: 'ATIVO',
            location: {
                coordinates: [-23.559421, -46.638310],
                type: 'Point'
            }
        },
        {
            name: 'Mercedes-Benz Sprinter Executiva Van',
            identification: 'ASD-3658',
            city: 'São Paulo',
            state: 'São Paulo',
            country: 'BR',
            model: 'Sprinter',
            brand: 'Mercedes',
            category: 'VAN',
            status: 'ATIVO',
            location: {
                coordinates: [-23.559421, -46.638310],
                type: 'Point'
            }
        },
        {
            name: 'Mercedes-Benz Sprinter Executiva Van',
            identification: 'ASD-3658',
            city: 'São Paulo',
            state: 'São Paulo',
            country: 'BR',
            model: 'Sprinter',
            brand: 'Mercedes',
            category: 'VAN',
            status: 'ATIVO',
            location: {
                coordinates: [-23.559421, -46.638310],
                type: 'Point'
            }
        }
    ];
    const conn = await this._app.database.connectionFactoryMongoDriver();
    return await conn.collection('vehicles').insertMany(vehicles);
}

module.exports = function () {
    return VehicleMongoDao
}
