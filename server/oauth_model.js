
/**
{
    access_token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    expires: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    client_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    refresh_token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    refresh_token_expires_on: {
      type: DataTypes.DATE,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }
 */
module.exports.getAccessToken = (bearerToken, callback) => {
  /** CASO A CONSULTA NA BASE NAO TENHA NADA
  return db.Oauth_tokens.findOne({
    where: {
      access_token: bearerToken
    }
  }).then(token => {
    if (!token) {
      return callback(false);
    }
    return callback(null, {
      accessToken: token.access_token,
      accessTokenExpiresAt: new Date(token.expires),
      client: { id: token.client_id },
      expires: token.expires,
      user: { id: token.user_id },
    });
  });
   */
  console.log('module.exports.getAccessToken');
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

/**
 const Oauth_clients = sequelize.define('Oauth_clients', {
    client_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    client_secret:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    redirect_uri:{
      type: DataTypes.TEXT
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  });
 */
module.exports.getClient = (clientId, clientSecret, callback) => {
    /** CASO A CONSULTA NA BASE NAO TENHA NADA 
return db.Oauth_clients.findOne({
    where: {
      client_id: clientId,
      client_secret: clientSecret
    }
  }).then(Oauth_client => {
    if (!Oauth_client) {
      return callback(false);
    }
    return callback(null, {
      client_id: Oauth_client.client_id,
      client_secret: Oauth_client.client_secret,
      grants: ['password']
    });
  });
    */
   console.log('module.exports.getClient');
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



/**
const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'O e-mail não é válido'
        }
      },
      unique: {
        msg: 'Um usuário com este e-mail já existe'
      }
    },
    password: DataTypes.STRING,
    cpf: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Um usuário com este CPF já existe'
      }
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    rol: {
      type: DataTypes.ENUM('Administrador', 'Gestor', 'Supervisor', 'Usuário'),
      allowNull: false
    },
    passRecoverToken: DataTypes.STRING,
    passRecoverTokenExpiresAt: DataTypes.DATE,

    confirmationToken: DataTypes.STRING,
    confirmationTokenExpiresAt: DataTypes.DATE,
  }

 */
module.exports.getUser = (username, password, callback) => {
  // const sanitized_username = username ? username.replace(/[^\w\s]/gi, '') : username;
  // const query = { active: true };
  // /^\d+$/.test(username) ? query.cpf = sanitized_username : query.email = username;
  // return db.User.findOne({
  //   where: query
  // }).then(user => {
  //   if (!user)
  //     return callback(false);
  //   if (user && user.verifyPassword(password, user.password)) {
  //     return callback(null, user);
  //   } else {
  //     return callback(false);
  //   }
  // });
  console.log('module.exports.getUser');
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
  // return db.Oauth_tokens.create({
  //   access_token: token.accessToken,
  //   expires: token.accessTokenExpiresAt,
  //   refresh_token: token.refreshToken,
  //   refresh_token_expires_on: token.refreshTokenExpiresAt,
  //   scope: client.scope,
  //   client_id: client.client_id,
  //   user_id: user.id,
  //   user_role: user.rol
  // }).then(token => {
  //   if (!token) {
  //     return callback(false);
  //   }
  //   return callback(null, {
  //     accessToken: token.access_token,
  //     accessTokenExpiresAt: new Date(token.expires),
  //     scope: token.scope,
  //     client: { id: token.client_id },
  //     user: { id: token.user_id }
  //   });
  // });
  console.log('module.exports.saveToken');
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
    // return db.Oauth_clients.findOne({
    //   where: {
    //     client_id: clientId
    //   }
    // }).then(result => result);
  }
};