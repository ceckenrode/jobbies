module.exports = function(app, passport) {
  var Jobbie = require('../models/jobbieModel');
  //test route, logs the request body in the console to see what is being sent
  app.post('/test', function(req, res) {});

  //register and login routes====================================================================
  //register===================================================
  app.post('/register', passport.authenticate('local-signup'),
    function(req, res) {
      // If this function gets called, authentication was successful.
      // `req.user` contains the authenticated user.
      console.log(req.user);
      res.json(req.user);

    }
  );

  app.get('/api/jobbies', function(req, res) {
    Jobbie.find({}).find(function(err, doc) {
      res.json(doc);
    })
  });



  //login======================================================
  app.post('/login', passport.authenticate('local-login'),
    function(req, res) {
      // If this function gets called, authentication was successful.
      // `req.user` contains the authenticated user.
      res.json(
        req.user
      );
    }
  );
  //===============================================================================================

  app.get('/logout', function(req, res) {
    //logout user and send empty response
    req.logout();
    res.send({});
  });


  app.get('*', function(req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
  });


  // route middleware to make sure user is logged in
  function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
      return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
  }
}
