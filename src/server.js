'use strict';

var user_routes = require('../routes/user_routes');

var express = require('express');
var bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
var session = require('cookie-session');

var app = express();

app.use(session({secret: "Shh, its a secret!"}));
//app.use(express.static(__dirname + '/../public'));

app.use(express.static(__dirname + '/assets/scripts'));
app.use(express.static(__dirname + '/assets/css'));

//new line
app.use(express.static(__dirname + '/../dist'));

app.engine('.html', require('ejs').__express);
app.set('views', __dirname +'/../dist');
app.set('view engine', 'html');


// The request body is received on GET or POST.
// A middleware that just simplifies things a bit.
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

// Get the index page:
app.get('/', function(req, res) {
        res.render('welcome', {  // Note that .html is assumed.
        errors: ''
    });
});

app.get('/addhouse', function(req, res) {
        res.render('addhouse', {  // Note that .html is assumed.
        errors: ''
    });
});

app.post('/addhouse', user_routes.AddHouse);
app.get('/houses', user_routes.DisplayHouses);

// Start the server
app.listen(3000);
console.log('Listening on port 3000');
