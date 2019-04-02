// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

// nu ii specificat param
app.get("/api/timestamp", function (req, res) {
  var d = new Date(); 
  var ret = {"unix": null, "utc" : "Invalid Date" };
  if (d) { 
    ret.unix = d.getTime();
    ret.utc = d.toUTCString();
  }
  res.json(ret);
});

// ii specificat param
app.get("/api/timestamp/:date_string", function (req, res) {
  var d = new Date(req.param('date_string')); 
  var ret = {"unix": null, "utc" : "Invalid Date" };
  if (d) { 
    ret.unix = d.getTime();
    ret.utc = d.toUTCString();
  }
  res.json(ret);
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});