module.exports = function(app, passport) {
  //test route, logs the request body in the console to see what is being sent
  app.post('/test', function(req, res) {
    console.log(req.body);
  });

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

  app.get('*', function(req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
  });
};

// route middleware to make sure user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
