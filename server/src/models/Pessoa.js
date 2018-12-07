module.exports = (app)=>{
    var mongoose = require('mongoose');
    // var mongoosePaginate = require('mongoose-paginate');
    var schema = mongoose.Schema({
        name: { 
            type: String, 
            required: true
        },
        description: {
            required: true,
            type: String        
        }
    });
    return mongoose.model('Pessoa', schema);
}