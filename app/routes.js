module.exports = function(app) {

  app.get('*', function(req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
  });

}