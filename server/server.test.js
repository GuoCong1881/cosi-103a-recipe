const request = require('supertest');
const server = require('../server');

describe('Server', function() {
  it('should list ALL blobs on /blobs GET', function(done) {
    request(server)
      .get('/blobs')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});