var restify = require('restify-clients');
function HttpCallExample() {
  this._client = restify.createJsonClient({
    url: 'http://34.229.135.40:8080',
    version: '~1.0'
  })
}
HttpCallExample.prototype.algumMetodoQualquer = 
                (payload, callback)=>{
                    //this._client.post('/init/resource', payload, callback)
                    let client = restify.createJsonClient({
                      url: 'http://34.229.135.40:8080',
                      version: '~1.0'
                    })
                    client.post('/init/users', callback);
                }
module.exports = ()=>HttpCallExample