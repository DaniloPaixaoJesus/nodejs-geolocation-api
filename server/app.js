var app = require('./express-config')();
var porta = process.env.PORT || 3000;
app.listen(porta, function(){
  console.log('Servidor rodando na porta '+porta);
});
