var soap = require('soap')
function CorreiosSOAPClient(url) {
  this._url = url
}

CorreiosSOAPClient.prototype.calculaPrazo = (args, callback)=>{
  soap.createClient(
    this._url, (err, client)=>client.CalcPrazo(args, callback)
  )
}

module.exports = ()=>CorreiosSOAPClient