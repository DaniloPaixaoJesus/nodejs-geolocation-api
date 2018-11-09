var fs = require('fs')

module.exports = (app) => {

  let version = 1;

  app.post(`/api/v${version}/registerUser`, app.oauth.token());

  app.post(`/api/v${version}/metodo`, app.oauth.authenticate(), (req, res) => {
    let user = 'teste';
    console.log('authenticate user', user);
    res.status(200).send('ok - testado');
  });

}