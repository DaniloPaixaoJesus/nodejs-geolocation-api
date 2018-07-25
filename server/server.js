var express = require('express'),

	pathToSwaggerUi = require('swagger-ui').absolutePath(),

    app = express(),
	mongoose = require('mongoose'),
	Pessoas = require('./api/models/pessoaModel'),
	bodyParser = require('body-parser');
	

//var swaggerUi = require('swagger-ui-express'),
//swaggerDocument = require('./swagger.json');

/**
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/basicwebappdb'); 
 */
//conection database mongodb
var connstr = 'mongodb://localhost/basicwebappdb';

mongoose.connect(connstr, err =>{
	if(err){
		console.log('Error connect database: '+ err);
	}else{
		console.log('DataBase connected');
	}
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/pessoaRoutes');
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', routes);

routes(app);

app.use(express.static(pathToSwaggerUi))
var port = process.env.PORT || 8080;
app.listen(port, function(){
	console.log('Server is running: '+ port);
});