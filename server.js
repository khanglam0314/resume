var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('resume', ['resume']);

app.use(express.static(__dirname + '/public'));

app.get('/resume/edu', function (req, res) {
  console.log('I received a GET request');
  db.resume.find(({type: 'edu' }), function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.get('/resume/skill', function (req, res) {
  console.log('I received a GET request');
  db.resume.find(({type: 'skill'}), function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});

app.get('/resume/project', function (req, res) {
  console.log('I received a GET request');
  db.resume.find(({type: 'project'}), function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});


app.listen(8080);
console.log("Server running on port 8080");