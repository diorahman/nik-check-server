var server = require('./');
var request = require('supertest');
var config = require('./config');

request(server)
  .post('/verify')
  .set('Content-type', 'application/json')
  .send({ nik : '12345677'})
  .expect(404)
  .expect('Content-Type', /json/)
  .end(function(err, res){
    if (err) throw err;
  });

request(server)
  .post('/verify')
  .set('Content-type', 'application/json')
  .send({ nik : config.test.truthy.nik })
  .expect(200)
  .expect('Content-Type', /json/)
  .end(function(err, res){
    if (err) throw err;
  });

