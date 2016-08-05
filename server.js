var express = require("express");
var app = express();
var multer  = require('multer');
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.post('/', multer({ dest: './uploads/'}).single('upl'), function(req,res){
	var answer = {size: req.file.size};
	res.send(answer);
	res.status(204).end();
});

var port = process.env.PORT || 8080; // set our port

app.listen(port, function() {
  console.log('Server listening on ' + port);
});