module.exports = (app)=>{

  // app.get('/', (req, res)=>{
  //   let resultado = 233//app.util.Utils.somar(1,2)
  //   res.render('index', {attr:resultado})
  // });

  app.get('/', (req, res)=>{
    let reponse = { 
      name:'REST API Commute Project',
      currentVersion:'1.0.0.3',
      versions: ['1.0.0.0', '1.0.0.1', '1.0.0.3'],
      status:'ONLINE'
    }
    res.status(200).send(reponse);
  });

  app.get('/api', (req, res)=>{
    let reponse = { 
      name:'REST API Commute Project',
      currentVersion:'1.0.0.3',
      versions: ['1.0.0.0', '1.0.0.1', '1.0.0.3'],
      status:'ONLINE'
    }
    res.status(200).send(reponse);
  });


  //       const client = await MongoClient.connect(mongoUrl);
  //       return client.db('refricode').collection(db_collection).aggregate(
  //           [{
  //               $geoNear: {
  //                   near: {type:"Point",coordinates:[args.lat,args.long]},
  //                   distanceField: "dist",
  //                   maxDistance: 50000,
  //                   num: 2,
  //                   spherical: true
  //               }
  //           }]
  //       ).toArray();

}
