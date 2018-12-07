module.exports.getAccessToken = (bearerToken, callback) => {
  if (bearerToken != '2716c89fcefbb84c91a52559297b680af776b9e8') {
    return callback(false);
  }
  return callback(null, {
    accessToken: '2716c89fcefbb84c91a52559297b680af776b9e8',
    accessTokenExpiresAt: new Date('2019-11-26T13:38:34.340Z'),
    client: { id: '1111' },
    expires: '2019-11-26T13:38:34.340Z',
    user: { id: 99 },
  });
};

module.exports.getClient = (clientId, clientSecret, callback) => {
    let Oauth_client = true;
    if (!Oauth_client) {
      return callback(false);
    }
    return callback(null, {
      client_id: '111',
      client_secret: 'secret',
      grants: ['password']
    });
  
};

module.exports.getUser = (username, password, callback) => {
  let user = {
            id: 1,
            name: 'teste', email: 'danilo@danilo.com', password: 'gbuiesghosiurhgqaerg', 
            active : true, rol : 'gestor', passRecoverToken: '', passRecoverTokenExpiresAt: '',
            confirmationToken: '',
            confirmationTokenExpiresAt: '' 
          }
  if (!user){
      return callback(false);
  } else {
      return callback(null, user);
  }
};

module.exports.saveToken = (token, client, user, callback) => {
  return callback(null, 
    {
      accessToken: '2716c89fcefbb84c91a52559297b680af776b9e8',
      accessTokenExpiresAt: new Date('2019-11-26T13:38:34.340Z'),
      scope: 'scope',
      client: { id: '111'},
      user: { id: '1'}
  });
};

module.exports.grantTypeAllowed = (clientId, grantType) => {
  console.log('module.exports.grantTypeAllowed');
  if (grantType === 'password' || grantType === 'refresh_token') {
    return {
      client_id: '111',
      client_secret: 'secret',
      grants: ['password']
    }
  }
};