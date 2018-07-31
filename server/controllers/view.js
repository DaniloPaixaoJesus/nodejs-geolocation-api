module.exports = function(app){

  app.get('/view', function(req, res){
    //console.log('Recebida requisicao de teste na porta 3000.')
    //res.send('OK.');
    let resultado = app.util.Utils.somar(1,2)
    res.render('index', {attr:resultado})
  });

}
