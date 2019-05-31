module.exports = (app)=>{

  app.post('/correios/calculo-prazo', (req, res)=>{
    var dadosDaEntrega = req.body  
    var correiosSOAPClient = new app.service.correiosSOAPClient()
    correiosSOAPClient.calculaPrazo(dadosDaEntrega, (erro, resultado)=>{
                if (erro){
                  res.status(500).send(erro)
                  return;
                }
                console.log('prazo calculado')
                res.json(resultado)
              })
  });

  app.post('/call/http', (req, res)=>{
    var httpCallExample = new app.service.httpCallExample();
    let payload = req.body['payload'];
    httpCallExample.algumMetodoQualquer(payload, 
        function (err, request, response, retorno) {
          if (err){
            console.log("Erro ao executar API.")
            res.status(400).send(err)
            return
          }
          res.status(200).send(retorno);
          return;
        })
  });

  app.post('/posts', (req, res)=>{
    let reponse = {
      id:"4578fghet235gsdg24512324fdgf3",
      createdAt: "2018-05-01-14-05-03",
      companyName: "MacDonalds",
      companyId: "4r3wdfr32r213e4qwer",
      address: "Rua Maria do Rosario",
      geolocation:{
        lat:"542343245",
        lon: "965457238957235"
      }
    }
    res.status(200).send(reponse);
  });

  app.get('/posts', (req, res)=>{
    console.log('Recebida requisicao para vir todos os posts.')
    let posts = [
      {
        id:"4578fghet235gsdg24512324fdgf3",
        createdAt: "2018-05-01-14-05-03",
        companyName: "MacDonalds",
        companyId: "4r3wdfr32r213e4qwer",
        address: "Rua Maria do Rosario",
        geolocation:{
          lat:"542343245",
          lon: "965457238957235"
        },
        sender:{
            nickname:"Revoltado",
            login:"dpjesus"
        },
        picturesUrl:[
          "http://34248204932-4325",
          "http://34248204932-4325"
        ]
      },
      {
        id:"4578fghet235gsdg24512324fdgf3",
        createdAt: "2018-05-01-14-05-03",
        companyName: "MacDonalds",
        companyId: "4r3wdfr32r213e4qwer",
        address: "Rua Maria do Rosario",
        geolocation:{
          lat:"542343245",
          lon: "965457238957235"
        },
        sender:{
            nickname:"Revoltado",
            login:"dpjesus"
        },
        picturesUrl:[
          "http://34248204932-4325",
          "http://34248204932-4325"
        ]
      }
    ]
    res.status(200).send(posts);
  });

}
