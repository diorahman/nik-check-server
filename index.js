var nik = require('nik-check');
var express = require('express');
var bodyParser = require('body-parser');
var server = express();
server.use(bodyParser.json());
server.post('/verify', function(req, res) {
  if (!req.body || !req.body.nik)
    return res.sendStatus(400);
  nik(req.body, function(err, obj, distance){
    if (err)
      return res.status(404).send({
        message: err.message
      });
    var ret = {};
    ret.name = obj.Nama;
    ret.distance = distance;
    res.send(ret);
  });
});

module.exports = server;
