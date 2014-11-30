'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
chai.use(chaiHttp);

require('../../server.js');

describe('call the API endpoint', function() {

  it('should increciment the count', function(done) {
    chai.request('http://localhost:3000')
    .get('/count')
    .end(function(err, res) {
      expect(err).to.be.null;
      expect(res.status).to.eql(200);
      expect(res.body).to.include.property('count');
      expect(res.body.count).to.eql(1);
      done();
    });
  });
});
