var express = require('../config/custom-express')();
var request = require('supertest')(express);

describe('#api-partners',function(){

    beforeEach(function(done) {
        console.log('exec before each test case')
    });

    it('##get-all-json',function(done){
        request.get('http://localhost:3000/api/partners')
        //.set('Accept','application/json')
        //.expect('Content-Type',/json/)
        .expect(200,done);
    });

    it('##post-json', function (done) {
        request.post('/partners')
            .send({name:"",description:"livro de teste"})
            .expect(400,done)

    });

    it('#post-json-ok', function (done) {
        request.post('/produtos')
        .send({name:"name of some",description:"livro de teste"})
            .expect(302, done)
    });
});

/*var http = require('http');
var assert = require('assert');

describe('#controllers/api/partner',function(){

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
            assert.equal(res.statusCode,200);
            assert.equal(res.headers['content-type'],'application/json; charset=utf-8');
            done();
        })       
    })
})*/