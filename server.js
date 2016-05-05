//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var mongoose = require('mongoose');
var morgan = require('morgan')
var trainerCtrl = require('./models&ctrls/userCtrl.js');
var clientCtrl = require('./models&ctrls/clientCtrl.js');

// var corsOrigin = {
// 	origin: "http://localhost:6670"
// };
   
//express  
var app = express();

//middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
// app.use(session());

//endpoints
app.get('/api/trainer/:id', trainerCtrl.getOne);
app.post('/api/trainer', trainerCtrl.post);
app.put('/api/trainer', trainerCtrl.put);
////
app.get('/api/clients', clientCtrl.getAll);
app.get('/api/client', clientCtrl.getOne);
app.post('/api/client', clientCtrl.post);
app.put('/api/client', clientCtrl.put);
app.delete('/api/client/:id', clientCtrl.delete);


 //connecting
var port = process.env.PORT || 6683;
var mongoUri = 'mongodb://localhost:27017/projectFitness';
mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log('Connected to mongo at: ' + mongoUri);
})
app.listen(port, function() {
	console.log('I got an ear out for port ' + port)
})
