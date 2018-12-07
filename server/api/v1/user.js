var fs = require('fs')

module.exports = (app) => {

  let version = 1;

  app.post(`/api/v${version}/registerUser`, app.oauth.token());

  app.post(`/api/v${version}/metodo`, app.oauth.authenticate(), (req, res) => {
    let user = 'teste';
    console.log('authenticate user', user);
    //const permission = ac.can(user.rol).createOwn('application');
    const permission1 = app.accesscontrol.can('Gestor').createOwn('application');
    const permission2 = app.accesscontrol.can('Administrador').createOwn('application');
    console.log('permission1', permission1);
    console.log('permission2', permission2);
    res.status(200).send(`ok - permission2=${permission2.granted} permission1=${permission1.granted}`);
  });

}