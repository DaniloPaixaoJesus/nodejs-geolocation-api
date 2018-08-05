module.exports = (app)=>{

  app.get('/view', (req, res)=>{
    let resultado = app.util.Utils.somar(1,2)
    res.render('index', {attr:resultado})
  });

}
