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
            required: true,
            type: {
                latitude: {
                    required: true,
                    type: String        
                },
                longitude: {
                    required: true,
                    type: String        
                },
            }        
        }
    });
    return mongoose.model('Vehicle', schema);
}