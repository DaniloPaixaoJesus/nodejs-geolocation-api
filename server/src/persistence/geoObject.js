//const https = require('https')
function GeoObjectMongoDao(app) {
    this._app = app;
    this._ObjectID = require('mongodb').ObjectID;
}

GeoObjectMongoDao.prototype.create = async function (geoObject) {
    const newGeoObject = {
        name: geoObject.name,
        identification: geoObject.identification,
        status: geoObject.status
    };
    const conn = await this._app.database.connectionFactoryMongoDriver();
    return await conn.collection('geoObjects').insertOne(newGeoObject);
}

GeoObjectMongoDao.prototype.updateGeoLocation = async function (id, geoLocation) {
    const conn = await this._app.database.connectionFactoryMongoDriver();
    return await conn.collection('geoObjects')
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


GeoObjectMongoDao.prototype.findAll = async function () {
    const conn = await this._app.database.connectionFactoryMongoDriver();
    return await conn.collection('geoObjects').find().toArray();
}

GeoObjectMongoDao.prototype.findAllPaginated = async function (pagination, limit) {
    const conn = await this._app.database.connectionFactoryMongoDriver();
    const result = await conn.collectin('geoObjects').find().toArray();
    return new Promise((resolve, reject) => {
        if(!result){
            reject(result);
        }else{
            resolve(result);
        }
    });
}


GeoObjectMongoDao.prototype.findById = async function (id) {
    const conn = await this._app.database.connectionFactoryMongoDriver();
    const result = await conn.collection('geoObjects').findOne({ '_id': this._ObjectID(id) });
    return new Promise((resolve, reject) => {
        resolve(result);
    });
}

GeoObjectMongoDao.prototype.findByIdCallBack = async function (id, callback) {
    const conn = await this._app.database.connectionFactoryMongoDriver();
    conn.collection('geoObjects').findOne({ '_id': this._ObjectID(id) }, (err, geoObject) => {
        callback(null, geoObject);
    });
}


GeoObjectMongoDao.prototype.findByGeoLocation = async function(latitude, longitude, distance) {
    const conn = await this._app.database.connectionFactoryMongoDriver();
    return await conn.collection('geoObjects').aggregate(
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


GeoObjectMongoDao.prototype.loadDataForTest = async function () {
    const geoObjects = [
        {
            name: 'any name',
            identification: 'ASC958fa362139zw',
            status: 'ATIVO',
            location: {
                coordinates: [-23.559421, -46.638310],
                type: 'Point'
            }
        },
        {
            name: 'any name',
            identification: 'xV9as5f456f39aj',
            status: 'ATIVO',
            location: {
                coordinates: [-23.559421, -46.638310],
                type: 'Point'
            }
        }
    ];
    const conn = await this._app.database.connectionFactoryMongoDriver();
    return await conn.collection('geoObjects').insertMany(geoObjects);
}

module.exports = function () {
    return GeoObjectMongoDao
}
