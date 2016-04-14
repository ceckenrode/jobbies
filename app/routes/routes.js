module.exports = function(app, passport) {
  var Jobbie = require('../models/jobbieModel');
  var User = require('../models/userModel.js')

  //test route, logs the request body in the console to see what is being sent
  app.post('/test', function(req, res) {});

  //register and login routes====================================================================
  //register===================================================
  app.post('/register', passport.authenticate('local-signup'),
    function(req, res) {
      // If this function gets called, authentication was successful.
      // `req.user` contains the authenticated user.
      res.json(req.user);

    }
  );

  app.get('/api/jobbies', function(req, res) {
    Jobbie.find({}).populate('_employer').exec(function(err, docs) {
      if (err) throw err;
      res.json(docs);
    });
  });

  app.get('/api/users/:userId', function(req, res) {
   User.findOne({_id: req.params.userId})
   .exec(function(err, docs){
    if (err){
      res.status(404);
    }
   });

    User.find({_id: req.params.userId})
    .populate('jobbiesPosted')
    .populate('jobbiesAssigned')
    .deepPopulate('jobbiesAssigned._employer')
    .exec(function(err, docs) {
      if (err) throw err;
      res.json(docs);
    });
     
  });

  app.post('/api/postjobbie', isAuthenticated, function(req, res) {
    var job = new Jobbie(req.body);
    job._employer = req.user._id;
    job.save(function(err, doc) {
      if (err)
        throw err;
      console.log(doc);
      return doc;
    });

    res.json({});
  });

 app.post('/sendMessage', isAuthenticated, function(req, res) {
  console.log(req.body);
  console.log(req.user);
  var message = [{content: req.body.content, sender: req.user.fName, senderId: req.user._id}];
  User.findOneAndUpdate(
    {_id: req.body.to}, 
    {$push: {messages : message}}, 
    {upsert: true},
    function(err, model){
      if (err){
        throw err;
      }
    });
  res.json({});
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
  app.get('/authenticate', isAuthenticated, function(req, res) {
    res.status(200).json({});
  });

  app.get('/logout', function(req, res) {
    //logout user and send empty response

    req.logout();
    res.send({});
  });


  app.get('*', function(req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
  });


  // route middleware to make sure user is logged in
  function isAuthenticated(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
      return next();
    }
    // if they aren't alert the client they aren't logged in
    res.status(401).json({
      message: "You must log in to use this feature"
    });
  }
};
