module.exports = function(app) {

  app.post('/post', function(req,res){
    var sale = Sale(req.body);
    sale.save(function(err, doc){
      if (err) throw err;
      console.log("Sale Saved!");
      res.json(doc);
    })
  })
  app.get('*', function(req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
  });

}