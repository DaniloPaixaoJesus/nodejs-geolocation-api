var fs = require('fs');
var arquivo = process.argv[2];

fs.readFile(arquivo, 
    function(err, buffer){
            fs.writeFile("arquivo-novo.jpg"), buffer, 
                    function(err){
                        console.log('arquivo comprimido.')
                    }
            })
// go to console and type:  node fileReader.js <nome_do_arquivo>