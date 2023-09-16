const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Assuming your Express app is in the parent directory

const expect = chai.expect;
chai.use(chaiHttp);

describe('Express App', () => {
  it('should return the index page', (done) => {
    chai
      .request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.include('Welcome to My Express App');
        done();
      });
  });
});

// Add more test cases as needed
