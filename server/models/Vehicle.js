module.exports = (app)=>{
    var mongoose = require('mongoose');
    // var mongoosePaginate = require('mongoose-paginate');
    var schema = mongoose.Schema({
        name: { 
            type: String, 
            required: true
        },
        identification: {
            required: true,
            type: String        
        },
        city: {
            required: true,
            type: String        
        },
        state: {
            required: true,
            type: String        
        },
        country: {
            required: true,
            type: String        
        },
        model: {
            required: true,
            type: String        
        },
        brand: {
            required: true,
            type: String        
        },
        category: {
            required: true,
            type: String        
        },
        status: {
            required: true,
            type: String        
        },
        geoLocation: {
            time: {
                type: Date,
                default: Date.now
            },
            type: {
                type: String,
                enum: 'Point',
                default: 'Point'
            },
            coordinates: { 
                type: [Number], 
                default: [0, 0],
                index: '2dsphere'
            }     
        }
    });
    return mongoose.model('Vehicle', schema);
}