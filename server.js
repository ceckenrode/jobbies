// modules ==========================================================================
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var passport = require('passport');
var passportLocal = require('passport-local');
var bcrypt = require('bcryptjs');
var flash = require('connect-flash');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
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
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + "/public"));
// required for passport
app.use(session({
  secret: 'Jobbies1026'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ===========================================================================

require('./app/routes')(app, passport); //pass our application and passport into our routes

app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
}); //start server and console log on connection

exports = module.exports = app; // expose our app
