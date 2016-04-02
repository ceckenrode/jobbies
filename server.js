// modules ==========================================================================
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var passportLocal = require('passport-local');
var bcrypt = require('bcryptjs');
var logger = require('morgan');
var session = require('express-session');
var logger = require('morgan');
var db = require('./config/db');

//configuration ====================================================================
mongoose.connect(db.url); // connect to our database
require('./config/passport')(passport);

// set up our port ==================================================================

var PORT = process.env.PORT || 3000;
// middleware =======================================================================
app.use(logger('dev')); // log every request to the console
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + "/public"));
app.use(session({
  secret: 'Jobbies1026',
  resave: false,
  saveUninitialized: true,
})); // session secret
app.use(passport.initialize());// required for passport
app.use(passport.session()); // persistent login sessions

// routes ===========================================================================

require('./app/routes')(app, passport); //pass our application and passport into our routes

app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
}); //start server and console log on connection

exports = module.exports = app; // expose our app
