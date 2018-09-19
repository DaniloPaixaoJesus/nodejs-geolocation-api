module.exports = (app)=>{

  app.get('/', (req, res)=>{
    let resultado = 233//app.util.Utils.somar(1,2)
    res.render('index', {attr:resultado})
  });

  app.get('/api', (req, res)=>{
    let reponse = { 
      name:'API Commute Project',
      version:'1.0.0.1',
      status:'ONLINE'
    }
    res.status(200).send(reponse);
  });

}
