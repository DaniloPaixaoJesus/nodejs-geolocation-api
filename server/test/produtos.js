var http = require('http');
describe('#controllers/partner',function(){

    it('#test json format',function(done){
        var configuracoes = { //http://localhost:3000/api/partners
            hostname: 'localhost',
            port:3000,
            path:'/api/partners',
            headers: {
                'Accept' : 'application/json'
            }
        }

        http.get(configuracoes,function(res){
            if(res.statusCode == 200){
                console.log("Status=>ok");
            }

            if(res.headers['content-type'] == 'application/json;charset=utf-8'){
                console.log("content-type=>ok");
            }
            done();
        })       
    })
})