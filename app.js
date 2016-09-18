var express = require('express');
var app = express();

module.exports = app;

app.use(require('body-parser').json());
app.use(require('morgan')('dev'));

app.use(express.static(__dirname + '/browser'));
app.use(express.static(__dirname + '/node_modules'));

app.use('/api/salesPeople', require('./routes/salesPeople'));
app.use('/api/regions', require('./routes/regions'));

app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/index.html');
});

app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send(err.message);
});