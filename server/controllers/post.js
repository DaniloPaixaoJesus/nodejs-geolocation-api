module.exports = function(app){
  app.get('/posts', function(req, res){
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
