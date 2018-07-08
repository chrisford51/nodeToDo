var express = require('express');
var app = express();

var port = process.env.PORT || 1337;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.listen(port);

