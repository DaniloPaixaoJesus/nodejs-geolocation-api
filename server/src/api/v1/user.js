var fs = require('fs')

module.exports = (app) => {

  let version = 1;

  /**
    POST /api/v1/authenticate HTTP/1.1
    Host: localhost:3000
    Content-Type: application/x-www-form-urlencoded
    cache-control: no-cache
    Postman-Token: 35cf00c8-1f5d-4a72-ad86-fb60edd0e939
    username=loginpassword=123456client_id=111client_secret=secretgrant_type=passwordundefined=undefined
   */
  app.post(`/api/v${version}/authenticate`, app.oauth.token());


  /**
    POST /api/v1/metodo HTTP/1.1
    Host: localhost:3000
    Authorization: Bearer 2716c89fcefbb84c91a52559297b680af776b9e8
    cache-control: no-cache
    Postman-Token: 7288a4d7-e83d-4aa3-a45d-d9f36dc33913
   */
  app.post(`/api/v${version}/metodo`, app.oauth.authenticate(), (req, res) => {
    let user = 'teste';
    console.log('authenticate user', user);
    //const permission = ac.can(user.rol).createOwn('application');
    const permission1 = app.accesscontrol.can('Gestor').createOwn('application');
    const permission2 = app.accesscontrol.can('Administrador').createOwn('application');
    res.status(200).send(`ok - permission2=${permission2.granted} permission1=${permission1.granted}`);
  });

}