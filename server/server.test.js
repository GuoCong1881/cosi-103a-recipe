const request = require('supertest');
const server = require('./server.js');

describe('server.js', function() {
  it('should test whether API endpoint is reached', (done) => { // Add done callback here
    request(server)
      .get('/api/recipes')
      .expect("Content-Type", /json/)
      .expect(200)
      .end((err, res) => { // Handle the end of the request
        if (err) return done(err);
        expect(res.body).toEqual(expect.anything()); // Replace with your actual expectation
        done();
      });
  });
});

//assert some of the post endpoints
describe("Test example", () => {
  test("POST /send", (done) => {
    request(server)
      .post("/send")
      .expect("Content-Type", /html/) // Expect HTML instead of JSON
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
});