module.exports = (app)=>{

  app.get('/', (req, res)=>{
    let resultado = 233//app.util.Utils.somar(1,2)
    res.render('index', {attr:resultado})
  });

}
