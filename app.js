var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setController = require('./controllers/setupController');

var port = process.env.PORT || 1337;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());
setController(app);

app.listen(port);

